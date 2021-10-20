
CREATE TABLE subscriptions (
  id SERIAL NOT NULL PRIMARY KEY,
  meals_per_week SMALLINT NOT NULL,
  price REAL NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
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
  cardholder_name	VARCHAR(100),
  card_number VARCHAR(64),
  card_exp_date DATE NOT NULL,
  billing_address1 VARCHAR(100) NOT NULL,
  billing_address2 VARCHAR(100),
  billing_city VARCHAR(100),
  billing_state VARCHAR(10),
  billing_postal_code VARCHAR(15),
  billing_country VARCHAR(40)
);
COPY users
FROM '/Users/katherineyu/bootcamp/BestEats/database/data/userswithbilling.csv'
DELIMITER ','
CSV HEADER;


INSERT INTO subscriptions(meals_per_week, price) VALUES
  (3, 25.99),
  (4, 33.99),
  (5, 41.99),
  (7, 55.99);
