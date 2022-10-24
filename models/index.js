const mongoose = require('mongoose')
const countrySchema = require('./country')

const Country = mongoose.model('Country', countrySchema)

module.exports = {
  Country
}
