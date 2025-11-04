-- seed_data.sql
INSERT INTO users (name, email) VALUES ('Test User', 'test@example.com');
INSERT INTO wishlists (user_id, title) VALUES (1, 'Fødselsdag');
INSERT INTO wishes (wishlist_id, title, description, link)
VALUES
  (1, 'Fodbold', 'Ny officiel størrelse 5', 'https://example.com/fodbold'),
  (1, 'Høretelefoner', 'Støjreduktion', 'https://example.com/headphones');
