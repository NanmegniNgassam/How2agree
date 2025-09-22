const express = require('express');
const Freedy = require('../models/FreedyModel');

const router = express.Router();

// GET all freedies
router.get('/', (req, res) => {
  res.json({
    message: 'GET all freedies'
  })
})

// GET a single freedy
router.get('/:id', (req, res) => {
  res.json({
    message: 'GET a single freedy'
  })
})

// POST a new freedy
router.post('/', async (req, res) => {
  const { title, content, votes } = req.body;

  try {
    const freedy = await Freedy.create({
      title,
      content,
      votes,
      likes: []
    });

    res.status(200).json(freedy);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE a single freedy
router.delete('/:id', (req, res) => {
  res.json({
    message: 'DELETE a single freedy'
  })
})

// UPDATE a single freedy
router.patch('/:id', (req, res) => {
  res.json({
    message: 'UPDATE a single freedy'
  })
})

module.exports = router;