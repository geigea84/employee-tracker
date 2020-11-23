//NPM package constants
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const dotenv = require("dotenv").config();

//connect files from db/connection.js

//***WARNING*** git bash is not currently happy with this const
//const db = require("./db/connection");

//object destructuring
const { exit } = require("process");



//mysql -u root -p (.env) necessary here?


//prompts for choice menu, add more questions here
//for reference:
//https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

runPrompts();

function runPrompts() {
    inquirer.prompt([
        {
            type: "list",
            name: "prompts",
            message: "What would you like to do?",
            choices:[
                {
                    name: "View All Departments",
                    value: "viewAllDepartments"
                },
                {
                    name: "View All Roles",
                    value: "viewAllRoles"
                },
                {
                    name: "View All Employees",
                    value: "viewAllEmployees"
                },
                {
                    name: "Add a Department",
                    value: "addADepartment"
                },
                {
                    name: "Add a Role",
                    value: "addARole"
                },
                {
                    name: "Add an Employee",
                    value: "addAnEmployee"
                },
                {
                    name: "Update an Employee Role",
                    value: "updateAnEmployeeRole"
                },
                {
                    name: "Exit",
                    value: "exit"
                },
            ]
        }
    ]).then(res => {
        //link response to the respective function
        switch(res) {
            case "viewAllDepartments":
                viewAllDepartments();
                break;
            case "viewAllRoles":
                viewAllRoles();
                break;
            case "viewAllEmployees":
                viewAllEmployees();
                break;
            case "addADepartment":
                addADepartment();
                break;
            case "addARole":
                addARole();
                break;
            case "addAnEmployee":
                addAnEmployee();
                break;
            case "updateAnEmployeeRole":
                updateAnEmployeeRole();
                break;
            default:
                quit();
        }
    });
};


/*
//view department names and department ids
function viewAllDepartments() {
    db.getAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.log(departments);
        })
        //.then(() => runPrompts());
};

/*
//view job title, role id, corresponding department, salary
function viewAllRoles() {

};


/*
//view employee ids, first names, last names, job titles, 
//departments, salaries, and managers
function viewAllEmployees();

//prompted to enter name of new department and add to db
function addADepartment();

//prompted to enter name, salary, and department of new role
//and add to db
function addARole();

//prompted to enter first name, last name, role, manager
//and add to db
function addAnEmployee();

//prompted to select an employee to update
//and add to db
function updateAnEmployeeRole();
*/

function quit() {
    console.log("Exiting...");
    process.exit;
};