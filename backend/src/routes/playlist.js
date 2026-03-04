const express = require('express');
const router = express.Router();

// Mock database for playlists
let playlists = [];

// Create a new playlist
router.post('/', (req, res) => {
    const { name, songs } = req.body;
    const newPlaylist = { id: playlists.length + 1, name, songs: songs || [] };
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
});

// Get all playlists
router.get('/', (req, res) => {
    res.json(playlists);
});

// Get a single playlist by ID
router.get('/:id', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) return res.status(404).send('Playlist not found.');
    res.json(playlist);
});

// Update a playlist by ID
router.put('/:id', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) return res.status(404).send('Playlist not found.');

    const { name, songs } = req.body;
    playlist.name = name || playlist.name;
    playlist.songs = songs || playlist.songs;
    res.json(playlist);
});

// Delete a playlist by ID
router.delete('/:id', (req, res) => {
    const playlistIndex = playlists.findIndex(p => p.id === parseInt(req.params.id));
    if (playlistIndex === -1) return res.status(404).send('Playlist not found.');
    playlists.splice(playlistIndex, 1);
    res.status(204).send();
});

module.exports = router;