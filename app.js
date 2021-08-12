// import all dependencies --inquirer, console.table and db connection from ./db/connection
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");

//connect to sql database, if error, log error, else run manageEmployees function
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  //call function to start app
  manageEmployees();
});

//write function to start app - inquirer "list" of question, then return outcome for each selection
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
    .then((choice) => {
      //deconstruct "name:" and save as choice parameter
      const { interface } = choice;

      if (interface === "View All Employees") {
        return viewAllEmployees();
      } else if (interface === "View All Employees By Department") {
        return viewAllByDepartment();
      } else if (interface === "View All Employees By Manager") {
        return viewAllByManager();
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
    //catch errors in returns if exists
    .catch((err) => {
      console.log(err);
    });
};

// view all employees function
const viewAllEmployees = () => {
  //save mysql query as sql to use in actual query below
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
  //databse query (sql query, callback function)
  db.query(sql, (err, res) => {
    //catch errors if any exist
    if (err) {
      console.log(err);
    }
    //construct table in node.js from query
    console.table(res);
    //call initializing function to return to inquirer prompt
    manageEmployees();
  });
};

// view employees by Department
const viewAllByDepartment = () => {
  db.query(`SELECT * FROM department`, (err, res) => {
    if (err) {
      console.log(err);
    }
    const chooseDept = res.map(({ id, dept_name }) => ({
      name: dept_name,
      value: id,
    }));

    inquirer
      .prompt({
        type: "list",
        name: "department",
        message: "Which department would you like to see?",
        choices: chooseDept,
      })
      .then((choice) => {
        const { department } = choice;
        const sql = `SELECT CONCAT(first_name," ",last_name) AS Name
                  FROM employee
                    LEFT JOIN role ON role.id = employee.role_id
                    LEFT JOIN department ON department.id = role.department_id
                    WHERE department_id=?`;

        db.query(sql, department, (err, res) => {
          if (err) {
            console.log(err);
          }
          console.table(res);
          manageEmployees();
        });
      });
  });
};

const viewAllByManager = () => {
  const sql = `SELECT * FROM employee WHERE manager_id = 36`;

  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
    }
    const chooseManager = res.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    inquirer
      .prompt({
        type: "list",
        name: "managerList",
        message: "Which manager's team would you like to see?",
        choices: chooseManager,
      })
      .then((choice) => {
        const { managerList } = choice;
        const sql = `SELECT CONCAT(first_name," ",last_name) AS Name FROM employee WHERE manager_id=?`;
        db.query(sql, managerList, (err, res) => {
          if (err) {
            console.log(err);
          }
          console.table(res);
          manageEmployees();
        });
      });
  });
};
