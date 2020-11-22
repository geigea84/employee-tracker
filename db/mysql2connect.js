const mysql = require("mysql2");

//create the connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    //username is still root
    user: "root",
    //my password, dump on submission
    password: "uwoshFS28Apollo11",
    database: "employee_tracker"
});

connection.execute(
    function(err) {
        if(err) throw err.message;
    }
);

module.exports = connection;