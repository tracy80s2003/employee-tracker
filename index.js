const inquirer = require('inquirer')
const mysql = require('mysql')

const PORT = process.env.PORT || 3000

// connect mysql
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'employee_trackerDB',
    password : 'rootroot',
});

connection.connect(err => {
    if (err) throw err
    console.log(`MySQL connected on ${connection.threadId}`)
});

function manageOrg() {
    inquirer.prompt(
        [
        {
            name: 'action',
            type: 'list',
            message: 'WELCOME! What would you like to do?',
            choices: 
            [
                'VIEW departments, roles and employees',
                'VIEW employees by manager',
                'VIEW the total utilized budget of a department',
                'ADD departments, roles and employees',
                'UPDATE employee roles',
                'UPDATE employee managers',
                'DELETE departments, roles and employees',
                'EXIT'
            ],
        },
    ]).then(res => {
        // console.log(answer)
        if(res.action == "VIEW departments, roles and employees"){
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
        }
    })
}

manageOrg()
  




//   app.post('/', (req, res) => {
//     connection.query('INSERT INTO wishes (wish) VALUES (?)', [req.body.wish], (err, results) => {
//       if (err) throw err
//       res.status(200).send()
//     })
//   })
  
//   app.put('/:id', (req, res) => {
//     const id = req.params.id
//     const wish = req.body.wish
//     connection.query('UPDATE wishes SET wish = ? WHERE id = ?', [wish, id], (err, results) => {
//       if (err) throw err
//       res.status(200).send()
//     })
//   })
   
  
//   app.delete('/:id', (req, res) => {
//     const id = req.params.id
//     connection.query('DELETE FROM wishes WHERE id = ?', [id], (err, results) => {
//       if (err) throw err
//       res.status(200).send()
//     })
//   })
  
  
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));