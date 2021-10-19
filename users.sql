-- psql postgres -U katherineyu
DROP DATABASE IF EXISTS best_eats_test;
CREATE DATABASE best_eats_test;

\c best_eats_test;

CREATE TABLE users (
  id GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
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
  zip VARCHAR(10) NOT NULL,


  cardholder_name VARCHAR(50) NOT NULL,
  cc_number VARCHAR(20) NOT NULL,
  cc_exp DATE NOT NULL,
  cvv INT NOT NULL,

  subscribed BOOLEAN NOT NULL,
  subscription_id INT NOT NULL REFERENCES(),                            -- FINISH
  member_start_date TIMESTAMP,
  member_end_date TIMESTAMP,
  subscription_start_date TIMESTAMP,
  subscription_end_date TIMESTAMP,
  preferences TEXT[]
);