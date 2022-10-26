const { Schema } = require('mongoose')

const civilizationSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    countries: [{ type: Schema.Types.ObjectId, ref: 'Country', required: true }]
  },
  { timestamps: true }
)

module.exports = civilizationSchema
