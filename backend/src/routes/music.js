// backend/src/routes/music.js

const express = require('express');
const router = express.Router();
const Music = require('../models/music'); // Ensure correct path to your Music model

// Create a new music entry
router.post('/', async (req, res) => {
    const newMusic = new Music(req.body);
    try {
        const savedMusic = await newMusic.save();
        res.status(201).json(savedMusic);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Read all music entries
router.get('/', async (req, res) => {
    try {
        const music = await Music.find();
        res.status(200).json(music);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Read a specific music entry by ID
router.get('/:id', async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        res.status(200).json(music);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a music entry by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedMusic = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMusic);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete a music entry by ID
router.delete('/:id', async (req, res) => {
    try {
        await Music.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;