const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  manageEmployees();
});

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
      const { interface } = req;

      if (interface === "View All Employees") {
        return viewAllEmployees();
      } else if (interface === "View All Employees By Department") {
        console.log("Viewsdkjfnsdfl");
        return "View All Employees By Department";
      } else if (interface === "View All Employees By Manager") {
        return "View All Employees By Manager";
      } else if (interface === "Add Employee") {
        return "Add Employee";
      } else if (interface === "Remove Employee") {
        return "Remove Employee";
      } else if (interface === "Update Employee Role") {
        return "Update Employee Role";
      } else if (interface === "Update Employee Manager") {
        return "Update Employee Manager";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// view all employees function
const viewAllEmployees = () => {
  const sql = `SELECT employee.id AS id,
                      employee.first_name,
                      employee.last_name,
                      role.title AS Role,
                      department.dept_name AS Department,
                      role.salary AS Salary,
                      CONCAT (manager.first_name, " ",manager.last_name) AS Manager
               FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    manageEmployees();
  });
};
