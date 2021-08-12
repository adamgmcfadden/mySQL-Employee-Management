// const db = require("../db/connection");
// const options = require("../lib/index");
// const cTable = require("console.table");

// // view all employees function
// const viewAllEmployees = () => {
//   // const sql = `SELECT employee.id AS id,
//   //                     employee.first_name,
//   //                     employee.last_name,
//   //                     role.title,
//   //                     department.name AS department,
//   //                     role.salary,
//   //                     CONCAT (manager.first_name, " ",manager.last_name) AS manager
//   //              FROM employee
//   //                     LEFT JOIN role ON employee.role_id = role.id
//   //                     LEFT JOIN department ON role.department_id = department.id
//   //                     LEFT JOIN employee manager ON employee.manager_id = manager.id`;

//   const sql = `SELECT * FROM employee`;

//   db.query(sql, (err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(res);
//     options.manageEmployees();
//   });
// };

// module.exports = { viewAllEmployees };
