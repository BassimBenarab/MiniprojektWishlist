const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../db/db.sqlite');
const db = new sqlite3.Database(dbPath);

function runScriptFile(filePath, cb) {
  const fs = require('fs');
  const sql = fs.readFileSync(filePath, 'utf8');
  db.exec(sql, cb);
}

module.exports = { db, runScriptFile };
