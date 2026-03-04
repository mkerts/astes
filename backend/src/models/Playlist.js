const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tracks: [{
        type: String,
        default: []
    }],
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Playlist', PlaylistSchema);