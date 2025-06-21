const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/upload', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

module.exports = router;