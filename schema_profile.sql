-- psql postgres -U timjordan
DROP DATABASE IF EXISTS best_eats_test;
CREATE DATABASE best_eats_test;

\c best_eats_test;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  hash_password VARCHAR(64) NOT NULL,

  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone INT NOT NULL,

  address VARCHAR(50) NOT NULL,
  city VARCHAR(36) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT NOT NULL,

  billing_address VARCHAR(50) NOT NULL,
  billing_zip INT NOT NULL,
  credit_card BIGINT NOT NULL,
  cc_exp DATE NOT NULL,
  security_code INT NOT NULL,

  subscribed INT NOT NULL,
  subscription_id INT NOT NULL REFERENCES(),                            -- FINISH
  member_start_date DATE NOT NULL,
  member_end_date DATE NOT NULL,
  subscription_start_date DATE NOT NULL,
  subscription_end_date DATE NOT NULL,
  preferences TEXT[]
);

CREATE TABLE meal (                                                    -- DELETE
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(5)
);

CREATE TABLE status (
  id SERIAL NOT NULL PRIMARY KEY,
  text VARCHAR(100) NOT NULL,
  emoji VARCHAR(10) NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE user_status (
  id us,
  user_id INT  NOT NULL REFERENCES users(id),
  status_id INT NOT NULL REFERENCES status(id)
);

CREATE TABLE user_meals (
  id SERIAL NOT NULL
  user_id INT NOT NULL REFERENCES users(id),
  meal_id INT NOT NULL REFERENCES meal(id),                            -- FINISH
  date_ordered DATE NOT NULL,
  date_received DATE NOT NULL,
);