DROP DATABASE IF EXISTS best_eats;
CREATE DATABASE best_eats;

\c best_eats

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  price VARCHAR(20) NOT NULL,
  category VARCHAR(40) NOT NULL,
  calories INT NOT NULL,
  carbs INT NOT NULL,
  protein INT NOT NULL,
  fats INT NOT NULL,
  image VARCHAR(400) NOT NULL,
  quantity INT NOT NULL,
  onSale BOOLEAN DEFAULT false,
  promo VARCHAR(20),
  unitType VARCHAR(20),
  unitSize INT NOT NULL,
  servingSize INT NOT NULL
);

CREATE TABLE meal (
  id SERIAL NOT NULL PRIMARY KEY,
  meal_name VARCHAR(100),
  photo TEXT NOT NULL,
  description VARCHAR(200) NOT NULL,
  highlights VARCHAR(100),
  time INT NOT NULL,
  low_calorie BOOLEAN DEFAULT false,
  vegetarian BOOLEAN DEFAULT false,
  pescatarian BOOLEAN DEFAULT false,
  vegan BOOLEAN DEFAULT false,
  halal BOOLEAN DEFAULT false,
  spicy BOOLEAN DEFAULT false,
  easy_prep BOOLEAN DEFAULT false,
  easy_cleanup BOOLEAN DEFAULT false
  calories INT NOT NULL,
  fat INT NOT NULL,
  carbs INT NOT NULL
);

CREATE TABLE meal_product (
  id SERIAL NOT NULL PRIMARY KEY,
  meal_id INT NOT NULL REFERENCES meal(id),
  product_id INT NOT NULL REFERENCES products(id)
);

CREATE TABLE subscriptions (
  id SERIAL NOT NULL PRIMARY KEY,
  meals_per_week SMALLINT NOT NULL,
  price REAL NOT NULL
);


CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  auth_id VARCHAR(50) NOT NULL UNIQUE,
  username VARCHAR(30) NOT NULL UNIQUE,
  hash_password VARCHAR(64) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100) NOT NULL,
  phone INT,
  address1 VARCHAR(100) ,
  address2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(10),
  postal_code VARCHAR(15),
  country VARCHAR(40),
  subscribed BOOLEAN DEFAULT false,
  member_start_date DATE NOT NULL,
  member_end_date DATE,
  subscription_start_date DATE,
  subscription_end_date DATE,
  weekly_start_date DATE,
  allow_meals BOOLEAN DEFAULT false,
  subscription_id INT REFERENCES subscriptions(id),
  meals_per_week SMALLINT DEFAULT 0,
  cardholder_name    VARCHAR(100),
  card_number VARCHAR(64),
  card_exp_date DATE,
  billing_address1 VARCHAR(100) NOT NULL,
  billing_address2 VARCHAR(100),
  billing_city VARCHAR(100),
  billing_state VARCHAR(10),
  billing_postal_code VARCHAR(15),
  billing_country VARCHAR(40),
  profile_pic VARCHAR(300)
);

CREATE TABLE farmers (
  id SERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone INT NOT NULL,
  farm VARCHAR(50) NOT NULL,
  biography TEXT NOT NULL
);

CREATE TABLE billing (
  id SERIAL NOT NULL PRIMARY KEY,
  billing_name	VARCHAR(30),
  hash_card_number VARCHAR(64),
  exp_date DATE NOT NULL,
  billing_address1 VARCHAR(50) NOT NULL,
  billing_address2 VARCHAR(50),
  billing_postal_code INT NOT NULL,
  hash_security_code VARCHAR(64) NOT NULL,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE status (
  id SERIAL NOT NULL PRIMARY KEY,
  text VARCHAR(400) NOT NULL,
  emoji VARCHAR(20),
  user_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP
);

CREATE TABLE user_meals (
  id SERIAL NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  meal_id INT NOT NULL REFERENCES meal(id),
  date_ordered DATE NOT NULL,
  date_received DATE NOT NULL
);

CREATE TABLE user_products (
  id SERIAL NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  product_id INT NOT NULL REFERENCES products(id),
  date_ordered DATE NOT NULL,
  date_received DATE NOT NULL
);

COPY products(id, product_name, product_price, category, calories, carbs, protein, fats, image, quantity, sale_price, promo, unit_type, unit_size, serving_size)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/products.csv'
DELIMITER ','
CSV HEADER;

COPY meal(id, meal_name, photo, description, time, low_calorie, vegetarian, pescatarian, vegan, halal, spicy, easy_prep, easy_cleanup)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/meals.csv'
DELIMITER ','
CSV HEADER;

COPY meal_product(id, meal_id, product_id)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/meal_product.csv'
DELIMITER ','
CSV HEADER;

-- COPY subscriptions(id, meals_per_week, price)
-- FROM '/Users/timjordan/HackReactor/BestEats/database/data/subscriptions.csv'
-- DELIMITER ','
-- CSV HEADER;

COPY users(id,username, hash_password, first_name, last_name, email, phone, address1, address2, city, state, postal_code, country, subscribed, member_start_date, member_end_date, subscription_start_date, subscription_end_date, weekly_start_date, meals_per_week, price)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/users.csv'
DELIMITER ','
CSV HEADER;

COPY status(id, text, emoji, user_id, created_at)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/status.csv'
DELIMITER ','
CSV HEADER;

COPY user_meals(id, user_id, meal_id, date_ordered, date_received)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/user_meals.csv'
DELIMITER ','
CSV HEADER;

COPY user_products(id, user_id, product_id, date_ordered, date_received)
FROM '/Users/timjordan/HackReactor/BestEats/database/data/user_products.csv'
DELIMITER ','
CSV HEADER;

SELECT setval('products_id_seq', (SELECT max(id) FROM products));
SELECT setval('meal_id_seq', (SELECT max(id) FROM meal));
SELECT setval('meal_product_id_seq', (SELECT max(id) FROM meal_product));
SELECT setval('users_id_seq', (SELECT max(id) FROM users));
SELECT setval('status_id_seq', (SELECT max(id) FROM status));
SELECT setval('user_meals_id_seq', (SELECT max(id) FROM user_meals));
SELECT setval('user_products_id_seq', (SELECT max(id) FROM user_products));