//get the client (here and server.js?  or just import to server?
//or connect to queries?)
const mysql = require("mysql2");

//create the connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test"
});

