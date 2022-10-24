const mongoose = require('mongoose')
const countrySchema = require('./country')
const civilizationSchema = require('./civilization')

const Country = mongoose.model('Country', countrySchema)
const Civilization = mongoose.model('Civilization', civilizationSchema)

module.exports = {
  Country,
  Civilization
}
