import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { initDb } from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

let db;

// Initialiser database
(async () => {
  db = await initDb();
})();

// Hent alle ønsker
app.get("/api/wishlist", async (req, res) => {
  try {
    const items = await db.all("SELECT * FROM wishlist");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tilføj et nyt ønske
app.post("/api/wishlist", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    await db.run("INSERT INTO wishlist (title) VALUES (?)", [title]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Slet et ønske
app.delete("/api/wishlist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.run("DELETE FROM wishlist WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Servér frontend (valgfrit)
app.use(express.static(path.resolve(__dirname, "../../frontend")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
