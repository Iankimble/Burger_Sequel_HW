CREATE DATABASE  IF NOT EXISTS burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT;
burger_name varchar(100) NOT NULL;
eaten BOOL DEFAULT false;
PRIMARY KEY (id);
);