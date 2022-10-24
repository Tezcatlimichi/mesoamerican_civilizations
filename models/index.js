const mongoose = require('mongoose')
const countrySchema = require('./brand')

const Country = mongoose.model('Country', countrySchema)

module.exports = {
  Country
}
