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

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
