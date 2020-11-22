//NPM package constants
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { exit } = require("process");

//prompts for choice menu, add more questions here
//https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
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

/*
function viewAllDepartments();

function viewAllRoles();

function viewAllEmployees();

function addADepartment();

function addARole();

function addAnEmployee();

function updateAnEmployeeRole();
*/
function quit() {
    console.log("Exiting...");
    process.exit;
};