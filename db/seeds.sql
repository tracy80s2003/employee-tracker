USE employee_trackerDB;

-- Creates new rows containing data in all named columns --
INSERT INTO department (deptName) VALUES
("Marketing"),
("Human Resources"),
("Sales"),
("Admin"),
("IT");

INSERT INTO role (title, salary, department_id) VALUES
("Marketing Coordinator", 45000.00, 1),
("Marketing Manager", 75000.00, 1),
("Hiring Coordinator", 55000.00, 2),
("Human Resources Manager", 55000.00, 2),
("Sales Specialist", 60000.00, 3),
("Sales Manager", 85000.00, 3),
("Admin Assistant", 40000.00, 4);
("Admin Sr Manager", 40000.00, 4);
("IT Specialist", 60000.00, 5),
("IT Manager", 80000.00, 5),



INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Lolli", "Popkins", 1, NULL),
("Jane", "Doe", 3, 1),
("Winston", "Churchill", 4, 2),
("Jim", "Bob", 1, 3),
("Snoop", "Dogg", 4, 1);