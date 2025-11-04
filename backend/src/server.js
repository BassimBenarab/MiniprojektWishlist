const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { db, runScriptFile } = require('./db');

const app = express();
app.use(bodyParser.json());

// serve frontend static (so index.html works via server)
app.use(express.static(path.resolve(__dirname, '../..', 'frontend')));

// Health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Init DB endpoints (for dev)
app.post('/init-db', (req, res) => {
  try {
    runScriptFile(path.resolve(__dirname, '../../resources/create_db.sql'), (err) => {
      if (err) return res.status(500).json({ error: err.message });
      runScriptFile(path.resolve(__dirname, '../../resources/seed_data.sql'), (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        return res.json({ status: 'db initialized' });
      });
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Simple CRUD endpoints
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT * FROM users WHERE id = ?', [this.lastID], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(201).json(row);
    });
  });
});

app.post('/users/:userId/wishlists', (req, res) => {
  const userId = req.params.userId;
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  db.run('INSERT INTO wishlists (user_id, title) VALUES (?, ?)', [userId, title], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT * FROM wishlists WHERE id = ?', [this.lastID], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(201).json(row);
    });
  });
});

app.get('/wishlists/:id/wishes', (req, res) => {
  const wishId = req.params.id;
  db.all('SELECT * FROM wishes WHERE wishlist_id = ?', [wishId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/wishlists/:id/wishes', (req, res) => {
  const wishlistId = req.params.id;
  const { title, description, link } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  db.run('INSERT INTO wishes (wishlist_id, title, description, link) VALUES (?, ?, ?, ?)',
    [wishlistId, title, description || null, link || null], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      db.get('SELECT * FROM wishes WHERE id = ?', [this.lastID], (err2, row) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.status(201).json(row);
      });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
