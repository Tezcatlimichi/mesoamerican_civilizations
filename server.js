const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./models')

const app = express()
//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Country route
// create country route
app.post('/countries', async (req, res) => {
  let createdCountry = await Country.create(req.body)
  res.json(createdCountry)
})
// read all countries ---> GET
app.get('/countries', async (req, res) => {
  let allCountries = await Country.find({})
  res.json(allCountries)
})
//update
app.put('/countries/:id', async (req, res) => {
  let updatedCountry = await Country.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedCountry)
})
//delete

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
