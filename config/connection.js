// to create connection require mysql
const mysql = require('mysql');

// create our database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'todo_db',
});

// make this avaiable to other
module.exports = connection;