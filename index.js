const inquirer = require('inquirer')
const mysql = require('mysql')

const PORT = process.env.PORT || 3000

// connect mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_trackerDB',
    password: 'rootroot',
});

connection.connect(err => {
    if (err) throw err
    console.log(`MySQL connected on ${connection.threadId}`)
});


// Prompt Action From User
const manageOrg = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'WELCOME! What would you like to do?',
            choices: [
                'VIEW all Employees',
                'VIEW all Roles',
                'VIEW all Departments',
                'VIEW all Employees By Department',
                'VIEW total Combined Salaries from Employees within a Department',
                'UPDATE Employee Role',
                'UPDATE Employee Manager',
                'ADD Employee',
                'ADD Role',
                'ADD Department',
                'REMOVE Employee',
                'REMOVE Role',
                'REMOVE Department',
                'EXIT'
            ]
        }
    ]).then(res => {
        // console.log(answer)
        if(res.action == "VIEW all Employees"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n')
            })
        } else if(res.action == "VIEW employees by manager"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } else if(res.action == "VIEW the total utilized budget of a department"){
            let query = `SELECT SUM(salary)
            FROM role`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } else if(res.action == "ADD departments, roles and employees"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } else if(res.action == "UPDATE employee roles"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } else if(res.action == "UPDATE employee managers"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } else if(res.action == "DELETE departments, roles and employees"){
            let query = `SELECT employee.id, first_name, last_name, role.title, role.salary, deptName
            FROM employee
            LEFT JOIN role
            ON role_id = role.id
            LEFT JOIN department
            ON department_id = department.id;`
            connection.query(query, (err, res) => {
                if(err) throw err;
                console.log('\n')
                console.table(res)
                console.log('\n') 
            })
        } // process.exit(1);
    })
}

manageOrg()