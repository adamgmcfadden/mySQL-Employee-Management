// const inquirer = require("inquirer");
// const { viewAllEmployees } = require("../utils/Queries");

// const manageEmployees = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "interface",
//         message: "What would you like to do?",
//         choices: [
//           "View All Employees",
//           "View All Employees By Department",
//           "View All Employees By Manager",
//           "Add Employee",
//           "Remove Employee",
//           "Update Employee Role",
//           "Update Employee Manager",
//         ],
//       },
//     ])
//     .then((req) => {
//       const { interface } = req;

//       if (interface === "View All Employees") {
//         return viewAllEmployees();
//       } else if (interface === "View All Employees By Department") {
//         console.log("Viewsdkjfnsdfl");
//         return "View All Employees By Department";
//       } else if (interface === "View All Employees By Manager") {
//         return "View All Employees By Manager";
//       } else if (interface === "Add Employee") {
//         return "Add Employee";
//       } else if (interface === "Remove Employee") {
//         return "Remove Employee";
//       } else if (interface === "Update Employee Role") {
//         return "Update Employee Role";
//       } else if (interface === "Update Employee Manager") {
//         return "Update Employee Manager";
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = manageEmployees;
