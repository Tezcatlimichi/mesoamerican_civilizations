const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country, Civilization } = require('./models')

const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/civilizations-clientfrontend/build`))

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})
//Countries
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

//update country
app.put('/countries/:id', async (req, res) => {
  let updatedCountry = await Country.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedCountry)
})
//delete country
app.delete('/countries/:id', async (req, res) => {
  let deletedCountry = await Country.findByIdAndDelete(req.params.id)

  res.json(deletedCountry)
})
//Civilizations
//get civilizations
app.get('/civilizations', async (req, res) => {
  const allCivilizations = await Civilization.find({})
  res.json(allCivilizations)
})
//create civilization
app.post('/civilizations', async (req, res) => {
  let countriesIds = ['6356b662bea130ad6628842d']
  const requestBody = { ...req.body }

  let createdCivilization = await Civilization.create(requestBody)

  countriesIds.forEach((country) => {
    createdCivilization.countries.push(country)
  })
  createdCivilization.save()
  res.json(createdCivilization)
})

//get single civilization
app.get('/civilizations/:id', async (req, res) => {
  let foundCivilization = await Civilization.findById(req.params.id).populate(
    'countries'
  )
  console.log(foundCivilization)
  res.json(foundCivilization)
})
//update civilization
app.put('/civilizations/:id', async (req, res) => {
  let updatedCivilization = await Civilization.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedCivilization)
})
//delete civilization
app.delete('/civilizations/:id', async (req, res) => {
  let deletedCivilization = await Civilization.findByIdAndDelete(req.params.id)

  res.json(deletedCivilization)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/civilizations-clientfrontend/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
