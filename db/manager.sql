CREATE TABLE manager(
    id INT,
    manager_full_name VARCHAR(30),
    FOREIGN KEY (id)
    REFERENCES employee(manager_id)
)