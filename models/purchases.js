const { Schema, model } = require('mongoose')

const purchase = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  dni: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required:true },
  telephone: { type: String, required: true },
  payDetail: { type: Array, required: true },

})

module.exports = model('Purchase', purchase)