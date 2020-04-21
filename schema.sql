/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS grocerylist;

CREATE DATABASE grocerylist;

USE grocerylist;

DROP TABLE IF EXISTS groceries;

CREATE TABLE groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE users_groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id int NOT NULL,
  grocery_id int NOT NULL
);

INSERT INTO groceries (name) VALUES ("Banana");
INSERT INTO groceries (name) VALUES ("Apple");

INSERT INTO users (name) VALUES ("Eric");
INSERT INTO users (name) VALUES ("Mom");

INSERT INTO users_groceries (user_id, grocery_id) VALUES (1, 1);
INSERT INTO users_groceries (user_id, grocery_id) VALUES (1, 2);