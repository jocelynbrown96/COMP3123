const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

const app = express();
const PORT = process.env.PORT || 8081;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Notes API — Jocelyn Brown — 101597391');
});

app.use(noteRoutes);

// Express 5 forwards rejected async route promises here.
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError' || err.name === 'CastError') {
        return res.status(400).json({ message: err.message });
    }

    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({ message: 'Invalid JSON body.' });
    }

    console.error('Request failed:', err.name);
    res.status(500).json({ message: 'Internal server error.' });
});

if (!DB_URL) {
    console.error('DB_URL is missing. Start with node --env-file=.env server.js');
    process.exit(1);
}

mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected to MongoDB.');
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err.name);
        process.exit(1);
    });
