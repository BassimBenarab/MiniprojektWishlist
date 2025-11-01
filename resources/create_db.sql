-- Foreløbig er det kun en placeholder

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE wishlists (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    name TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE wishes (
    id INTEGER PRIMARY KEY,
    wishlist_id INTEGER,
    title TEXT NOT NULL,
    description TEXT,
    link TEXT,
    FOREIGN KEY (wishlist_id) REFERENCES wishlists(id)
);
