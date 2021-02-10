USE employee_trackerDB;

INSERT INTO department (deptName) VALUES
("Marketing"),
("Human Resources"),
("Sales"),
("Admin"),
("IT");

INSERT INTO role (title, salary, department_id) VALUES
("Salesman", 65000.00, 3),
("Marketing Manager", 75000.00, 1),
("IT Specialist", 60000.00, 5),
("Hiring Coordinator", 55000.00, 2),
("Admin Asst", 50000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Lolli", "Popkins", 2, NULL),
("Jane", "Doe", 3, 1),
("Winston", "Churchill", 4, 2),
("Jim", "Bob", 1, 3),
("Snoop", "Dogg", 4, 1);