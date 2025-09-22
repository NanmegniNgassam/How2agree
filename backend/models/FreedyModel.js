const mongoose = require('mongoose')

const Schema = mongoose.Schema

const freedySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Array,
    required: true
  },
  votes: {
    type: Number,
    required: true,
  }
}, { timestamps: true })

module.exports = mongoose.model('Freedy', freedySchema);