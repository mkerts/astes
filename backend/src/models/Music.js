const mongoose = require('mongoose');

// Create a schema for music
const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    duration: { type: Number, required: true }, // duration in seconds
    rating: { type: Number, min: 0, max: 5 }, // rating out of 5
    filePath: { type: String, required: true },
    uploadedBy: { type: String, required: true },
}, { timestamps: true }); // add createdAt and updatedAt timestamps

// Create a model from the schema
const Music = mongoose.model('Music', musicSchema);

module.exports = Music;