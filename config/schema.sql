DROP DATABASE IF EXISTS todo_db;

-- create database
CREATE DATABASE todo_db;

-- use the database
USE todo_db;

CREATE TABLE todos
(
id INTEGER AUTO_INCREMENT,
text VARCHAR(255) NOT NULL,
completed BOOLEAN DEFAULT false, 
PRIMARY KEY(id)
);