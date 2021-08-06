//import required packages - dotenv to hide credentials and mysql2 to create connection
require("dotenv").config();
const mysql = require("mysql2");

//store variable for ease of use
const secure = process.env;

//Connect to database
const db = mysql.createConnection(
  {
    host: secure.DB_HOST,
    // Your MySQL username,
    user: secure.DB_USER,
    // Your MySQL password
    password: secure.DB_PASS,
    // reference database you want to use
    database: "employees",
  },
  console.log("Connected to the employees database")
);

//export db
module.exports = db;
