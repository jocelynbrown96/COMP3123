const Note = require('../models/NotesModel');
const express = require('express');
const router = express.Router();

// Validate the content wrapper for create and update requests.
function validateContent(req, res, next) {
    const content = req.body?.content;

    if (!content || typeof content !== 'object' || Array.isArray(content)) {
        return res.status(400).json({
            message: 'A content object is required.'
        });
    }

    if (
        typeof content.noteTitle !== 'string' ||
        !content.noteTitle.trim() ||
        typeof content.noteDescription !== 'string' ||
        !content.noteDescription.trim()
    ) {
        return res.status(400).json({
            message: 'Note title and description are required.'
        });
    }

    next();
}

// Create a note.
router.post('/notes', validateContent, async (req, res) => {
    const content = req.body.content;

    const note = await Note.create({
        noteTitle: content.noteTitle,
        noteDescription: content.noteDescription,
        priority: content.priority,
        dateAdded: content.dateAdded,
        dateUpdated: content.dateUpdated
    });

    res.status(201).json(note);
});

// Retrieve all notes. No request body is needed.
router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({ dateAdded: -1 });
    res.json(notes);
});

// Retrieve one note.
router.get('/notes/:noteId', async (req, res) => {
    const note = await Note.findById(req.params.noteId);

    if (!note) {
        return res.status(404).json({ message: 'Note not found.' });
    }

    res.json(note);
});

// Update a note while preserving its creation date.
router.put('/notes/:noteId', validateContent, async (req, res) => {
    const content = req.body.content;
    const updates = {
        noteTitle: content.noteTitle,
        noteDescription: content.noteDescription,
        dateUpdated: new Date()
    };

    if (content.priority !== undefined) {
        updates.priority = content.priority;
    }

    const note = await Note.findByIdAndUpdate(
        req.params.noteId,
        { $set: updates },
        { new: true, runValidators: true }
    );

    if (!note) {
        return res.status(404).json({ message: 'Note not found.' });
    }

    res.json(note);
});

// Delete a note.
router.delete('/notes/:noteId', async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.noteId);

    if (!note) {
        return res.status(404).json({ message: 'Note not found.' });
    }

    res.json({
        message: 'Note deleted successfully.',
        id: note._id
    });
});

module.exports = router;
