DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS user_meals;
DROP TABLE IF EXISTS user_products;

CREATE TABLE status (
  id SERIAL NOT NULL PRIMARY KEY,
  text VARCHAR(400) NOT NULL,
  auth_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE user_meals (
  id SERIAL NOT NULL,
  auth_id INT NOT NULL REFERENCES users(id),
  meal_id INT NOT NULL REFERENCES meal(id),
  date_ordered DATE NOT NULL,
  date_received DATE
);

CREATE TABLE user_products (
  id SERIAL NOT NULL,
  auth_id INT NOT NULL REFERENCES users(id),
  product_id INT NOT NULL REFERENCES products(id),
  date_ordered DATE NOT NULL,
  date_received DATE
);

SELECT setval('status_id_seq', (SELECT max(id) FROM status));
SELECT setval('user_meal_id_seq', (SELECT max(id) FROM user_meal));
SELECT setval('user_products_id_seq', (SELECT max(id) FROM user_products));

CREATE INDEX idx_auth ON users(auth_id);
CREATE INDEX idx_status_auth ON status(auth_id);
CREATE INDEX idx_user_meals_auth ON user_meals(auth_id);
CREATE INDEX idx_user_products_auth ON user_products(auth_id);
CREATE INDEX idx_status_created_at ON status(created_at DESC);
CREATE INDEX idx_user_meal_ordered on user_meal(date_ordered DESC);
CREATE INDEX idx_user_meal_received on user_meal(date_received DESC);