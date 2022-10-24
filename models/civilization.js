const { Schema } = require('mongoose')

const civilizationSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    timePeriod: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, ref: 'Country' }
  },
  { timestamps: true }
)

module.exports = civilizationSchema
