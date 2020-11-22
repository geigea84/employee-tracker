/* Need to rethink set up, do not need to have an actual server
or web application for this one */

//NPM package constants
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
        ]
    }
])

/*
//Import from database.js
const db = require("./db/database");

const PORT = process.env.PORT || 3007;
const app = express();

const apiRoutes = require("./routes/apiRoutes");

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Use api routes
app.use("/api", apiRoutes);

//Default response for any other request (Not Found) catch all
app.use((req, res) => {
    res.status(404).end();
});

db.on("open", () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
*/