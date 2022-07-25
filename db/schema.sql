DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE department(
      department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);


CREATE TABLE roles(
      role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  department_id INTEGER 
  -- CONSTRAINT fk_party FOREIGN KEY (department_id) REFERNCES department(department_id) ON DELETE SET NULL
);

CREATE TABLE employee(
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id  INTEGER 
    -- CONSTRAINT fk_party FOREIGN KEY (role_id) REFERNCES roles(role_id) ON DELETE SET NULL

);
  
