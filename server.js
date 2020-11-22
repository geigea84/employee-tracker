//NPM package constants
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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