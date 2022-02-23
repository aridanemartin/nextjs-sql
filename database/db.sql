CREATE DATABASE productsdb;

USE productsdb;

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE product;