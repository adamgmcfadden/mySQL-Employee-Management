const db = require("../db/connection");

// View all employees Query
const viewAllEmployees = () => {
  const mySql = `SELECT * FROM employee`;

  db.query(mySql, (err, res) => {
    if (err) {
      console.log(err);
    }
    res.json(res);
  });
};
module.exports = { viewAllEmployees };
