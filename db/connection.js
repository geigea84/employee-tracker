const mysql = require("mysql2");
const dotenv = require("dotenv").config();

//create the connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    //username is still root
    user: process.env.DB_USER,
    //my password, dump on submission
    password: process.env.DB_PASS,
    database: "employee_tracker"
});

connection.execute(
    function(err) {
        if(err) throw err.message;
    }
);

module.exports = connection;