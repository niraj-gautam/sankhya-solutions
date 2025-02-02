const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const db = new sqlite3.Database(process.env.DATABASE_PATH);

// Initialize database
const initializeDB = async () => {
    db.serialize(() => {
        // Create tables
        db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )`);

        db.run(`CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      image_path TEXT,
      file_path TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

        db.run(`CREATE TABLE IF NOT EXISTS hero_content (
      id INTEGER PRIMARY KEY DEFAULT 1,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      image_path TEXT NOT NULL
    )`);

        // Create default admin user if not exists
        db.get(`SELECT id FROM users WHERE username = 'admin'`, (err, row) => {
            if (!row) {
                const hashedPassword = bcrypt.hashSync("admin123", 10);
                db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [
                    "admin",
                    hashedPassword,
                ]);
            }
        });
    });
};

initializeDB();

module.exports = db;
