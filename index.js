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

const manageOrg = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
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
            ]
        }
    ]).then(answer => {
        // console.log(answer)
        if (answer.action === 'VIEW departments, roles and employees') {
            viewDeptRoleEmps()
        } else if (answer.action ==='VIEW employees by manager') {
           viewEmplByMgr() 
        } else if (answer.action ==='VIEW the total utilized budget of a department') {
           viewTotalUtilBudget()
        } else if (answer.action ==='ADD departments, roles and employees') {
            addDeptRoleEmps()
        } else if (answer.action ==='UPDATE employee roles') {
            updateEmpRole()
        } else if (answer.action ==='UPDATE employee managers') {
            updateEmpMgr()
        } else if (answer.action ==='DELETE departments, roles and employees') {
            deleteDeptRoleEmps()
        } else {
            exit()
        }
    })
}

const viewDeptRoleEmps = () => {
    console.log('viewDeptRoleEmps')
    manageOrg()
}

const viewEmplByMgr = () => {
    console.log('viewEmplByMgr')
    manageOrg()
}

const viewTotalUtilBudget = () => {
    console.log('viewTotalUtilBudget')
    manageOrg()
}

const addDeptRoleEmps = () => {
    console.log('addDeptRoleEmps')
    manageOrg()
}

const updateEmpRole = () => {
    console.log('updateEmpRole')
    manageOrg()
}

const updateEmpMgr = () => {
    console.log('updateEmpMgr')
    manageOrg()
}

const deleteDeptRoleEmps = () => {
    console.log('deleteDeptRoleEmps')
    manageOrg()
}

const exit = () => {
    connection.end()
    process.exit()
}