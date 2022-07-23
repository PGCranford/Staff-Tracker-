const mysql = require('mysql2/promise');
require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: process.env.password,
    database: 'staff'
});

module.exports = connection;