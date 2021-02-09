USE employee_trackerDB;

INSERT INTO department (deptName)
VALUES
("Marketing"),
("Human Resources"),
("Sales"),
("IT");

INSERT INTO role (title, salary, department_id)
VALUES
("Salesman", 65000.00, 3),
("Marketing Manager", 70000.00, 1),
("IT Specialist", 75000.00, 4),
("Hiring Coordinator", 60000.00, 2),
("IT Manager", 60000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Elvis", "Presley", 2, NULL),
("Jane", "Doe", 3, 1),
("Nick", "Carter", 4, 2);