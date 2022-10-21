const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://Tezcatlimichi:Maplemeep0@cluster0.kubpwxx.mongodb.net/civilizationsDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
