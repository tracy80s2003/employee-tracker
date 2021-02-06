# employee-tracker


## User Story

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

## Description

Architect and build a solution for managing a company's employees using node, inquirer, and MySQL using a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees
  * View departments, roles, employees
  * Update employee roles

Bonus points if you're able to:

  * Update employee managers
  * View employees by manager
  * Delete departments, roles, and employees
  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Guidelines

* Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.
* Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.
* Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.
* You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?
* You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

## Minimum Requirements

* Functional application.
* GitHub repository with a unique name and a README describing the project.
* The command-line application should allow users to:
    * Add departments, roles, employees
    * View departments, roles, employees
    * Update employee roles

## Demo

<<INSERT DEMO GIF VIDEO HERE!>>

## Deploying the App

This app should be deployed using a command-line application.

***

https://github.com/tracy80s2003/employee-tracker

https://tracy80s2003.github.io/employee-tracker/