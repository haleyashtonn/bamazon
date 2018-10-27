DROP DATABASE if exists bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB; 


CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price INTEGER (255) NOT NULL,
stock_quantity INTEGER (255) NOT NULL,
PRIMARY KEY (id)
);




INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tea Kettle", "Home and Kitchen", "30", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Standing Mixer", "Home and Kitchen", "200", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Apparel", "50", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Cheetos", "Food & Drink", ".99", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barack Obama Costume", "Apparel", "100", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boiled Water", "Home", "40", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript for Dummies", "Books", "20", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smoked Sausage", "Food & Drink", "10", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SPAM", "Food", "1.99", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green Tea", "Food & Drink", "50", "100");