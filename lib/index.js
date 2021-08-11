const inquirer = require("inquirer");
// const queries = require("../utils/Queries");

const manageEmployees = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "interface",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
      },
    ])
    .then((req) => {
      if (req === "View All Employees") {
        return "View All Employees";
      } else if (req === "View All Employees By Department") {
        return "View All Employees By Department";
      } else if (req === "View All Employees By Manager") {
        return "View All Employees By Manager";
      } else if (req === "Add Employee") {
        return "Add Employee";
      } else if (req === "Remove Employee") {
        return "Remove Employee";
      } else if (req === "Update Employee Role") {
        return "Update Employee Role";
      } else if (req === "Update Employee Manager") {
        return "Update Employee Manager";
      }
    });
};

module.exports = manageEmployees;
