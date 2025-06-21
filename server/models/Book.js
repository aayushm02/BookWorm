const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  cover: String,
  content: String,
  ageRating: Number,
  genre: String,
});

module.exports = mongoose.model('Book', bookSchema);