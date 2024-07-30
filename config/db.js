const mysql = require('mysql2');
require('dotenv').config();


const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPort = process.env.DB_PORT;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;


console.log(dbUser);

// MySQL connection
const db = mysql.createConnection({

    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPass, // replace with your actual password
    database: dbName

});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
