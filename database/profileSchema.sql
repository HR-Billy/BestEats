DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS user_meals;
DROP TABLE IF EXISTS user_products;

CREATE TABLE status (
  id SERIAL NOT NULL PRIMARY KEY,
  text VARCHAR(400) NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE user_meals (
  id SERIAL NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  meal_id INT NOT NULL REFERENCES meal(id),
  date_ordered DATE NOT NULL,
  date_received DATE
);

CREATE TABLE user_products (
  id SERIAL NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  product_id INT NOT NULL REFERENCES products(id),
  date_ordered DATE NOT NULL,
  date_received DATE
);

SELECT setval('status_id_seq', (SELECT max(id) FROM status));
SELECT setval('user_meal_id_seq', (SELECT max(id) FROM user_meal));





CREATE INDEX idx_status_created_at ON status(created_at DESC);










SELECT setval('user_products_id_seq', (SELECT max(id) FROM user_products));