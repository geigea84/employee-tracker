//js file for database queries
const connection = require("./connection");

//a js class is not an object, it is a template for js objects
//use class to hold query constructors for index.js functions
//for reference:
//https://www.w3schools.com/js/js_classes.asp
class DB {
    //include constructor calling connection to connection.js 
    //for reference:
    //https://codeburst.io/node-js-mysql-and-promises-4c3be599909b
    constructor(connection) {
        this.connection = connection;
    };

    /*prepared statements will require ? as placeholder and 
    output to enter into respective index.js functions */

    //get department names and department ids
    getAllDepartments() {
        //https://www.w3schools.com/js/js_promise.asp
        //https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
        return this.connection.promise().query(
            `SELECT * FROM department`
        );
    };
};

module.exports = new DB(connection);