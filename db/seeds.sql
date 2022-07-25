
INSERT INTO department 
(department_id, department_name)

VALUES
(1, 'Sales'),
(2, 'Technology'),
(3, 'Finance'),
(4, 'Legal');



INSERT INTO roles 
(role_id, title, salary, department_id)

VALUES
(1, 'Sales Lead', '4500000', 1),
(2, 'Engineer', '5500000', 2),
(3, 'Accountant', '6500000', 3),
(4, 'Lawyer', '8500000', 4);


INSERT INTO employee
(id, first_name, last_name, role_id, manager_id)

VALUES 
(1,'Richard', 'Nixon', 1, 3),
(2,'Rube', 'Wadell', 2, 3),
(3,'Anton', 'Lavey', 3, 3),
(4,'Norman', 'Smiley', 4, 3),
(5,'Dave', 'Anthony', 4, 3)