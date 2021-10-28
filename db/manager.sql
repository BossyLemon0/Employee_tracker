CREATE TABLE manager(
    id INT PRIMARY KEY AUTO_INCREMENT,
    manager_fname VARCHAR(30),
    manager_lname VARCHAR(30),
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(manager_id)
    ON DELETE SET NULL
)