DROP DATABASE IF EXISTS best_eats;
CREATE DATABASE best_eats;

\c best_eats

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  product_name VARCHAR(20) NOT NULL,
  product_price INT NOT NULL,
  category VARCHAR(20) NOT NULL,
  calories INT NOT NULL,
  carbs INT NOT NULL,
  protein INT NOT NULL,
  fats INT NOT NULL,
  image VARCHAR(200) NOT NULL,
  quantity INT NOT NULL,
  sale_price INT NOT NULL,
  promo VARCHAR(20),
  unit_type VARCHAR(20),
  unit_size INT NOT NULL,
  serving_size INT NOT NULL
);

CREATE TABLE meal (
  id SERIAL NOT NULL PRIMARY KEY,
  meal_name VARCHAR(20),
  photo	VARCHAR(20) NOT NULL,
  description	VARCHAR(100) NOT NULL,
  time INT NOT NULL,
  low_calorie INT NOT NULL DEFAULT 0,
  vegetarian INT NOT NULL DEFAULT 0,
  pescatarian INT NOT NULL DEFAULT 0,
  vegan INT NOT NULL DEFAULT 0,
  halal INT NOT NULL DEFAULT 0,
  spicy INT NOT NULL DEFAULT 0,
  easy_prep INT NOT NULL DEFAULT 0,
  easy_cleanup INT NOT NULL DEFAULT 0
);

CREATE TABLE meal_product (
  id SERIAL NOT NULL PRIMARY KEY,
  meal_id INT NOT NULL REFERENCES meal(id),
  product_id INT NOT NULL REFERENCES products(id)
);

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  hash_password VARCHAR(64) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone INT NOT NULL,
  address1 VARCHAR(50) NOT NULL,
  address2 VARCHAR(50),
  city VARCHAR(36) NOT NULL,
  state VARCHAR(2) NOT NULL,
  postal_code INT NOT NULL,
  country VARCHAR(20),
  subscribed INT NOT NULL DEFAULT 0,
  subscription_id INT NOT NULL,
  member_start_date DATE NOT NULL,
  member_end_date DATE NOT NULL,
  subscription_start_date DATE NOT NULL,
  subscription_end_date DATE NOT NULL,
  weekly_start_date DATE NOT NULL,
  allow_meals INT NOT NULL DEFAULT 0
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
  text VARCHAR(100) NOT NULL,
  emoji VARCHAR(10) NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE user_status (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT  NOT NULL REFERENCES users(id),
  status_id INT NOT NULL REFERENCES status(id)
);

CREATE TABLE user_meals (
  id SERIAL NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  meal_id INT NOT NULL REFERENCES meal(id),
  date_ordered DATE NOT NULL,
  date_received DATE NOT NULL
);