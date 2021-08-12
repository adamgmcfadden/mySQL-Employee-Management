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
        return addNewEmployee();
      } else if (interface === "Remove Employee") {
        return removeEmployee();
      } else if (interface === "Update Employee Role") {
        return updateEmplRole();
      } else if (interface === "Update Employee Manager") {
        return updateEmplManager();
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
  //mysql query : Select All from department table
  db.query(`SELECT * FROM department`, (err, res) => {
    if (err) {
      console.log(err);
    }
    //create new array with key and value for each department
    const chooseDept = res.map(({ id, dept_name }) => ({
      name: dept_name,
      value: id,
    }));

    //prompt user with a list of departments to choose from
    inquirer
      .prompt({
        type: "list",
        name: "department",
        message: "Which department would you like to see?",
        //call chooseDept array for choices
        choices: chooseDept,
      })
      .then((choice) => {
        //deconstruct "name:" and save as choice parameter
        const { department } = choice;
        //save SQL query as sql
        const sql = `SELECT CONCAT(first_name," ",last_name) AS Name
                  FROM employee
                    LEFT JOIN role ON role.id = employee.role_id
                    LEFT JOIN department ON department.id = role.department_id
                    WHERE department_id=?`;

        //mysql query
        db.query(sql, department, (err, res) => {
          if (err) {
            console.log(err);
          }
          //construct table in node.js from query
          console.table(res);
          //call initializing function to return to inquirer prompt
          manageEmployees();
        });
      });
  });
};

//view employees by their manager
const viewAllByManager = () => {
  //save sql query - SELECT all from employee where manager ID = 36 OR NULL (see db/seeds - will make sense)
  const sql = `SELECT * FROM employee WHERE manager_id = 36 OR manager_id is NULL`;

  //database query
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
    }
    //create new array with key and value for each manager
    const chooseManager = res.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    //prompt user with list of managers to choose from
    inquirer
      .prompt({
        type: "list",
        name: "managerList",
        message: "Which manager's team would you like to see?",
        choices: chooseManager,
      })
      .then((choice) => {
        //deconstruct "name:" and save as choice parameter
        const { managerList } = choice;
        //save sql query to be used : concat first and last name of employee where manager id=?
        const sql = `SELECT CONCAT(first_name," ",last_name) AS Name FROM employee WHERE manager_id=?`;
        db.query(sql, managerList, (err, res) => {
          if (err) {
            console.log(err);
          }
          //construct table in node.js from query
          console.table(res);
          //call initializing function to return to inquirer prompt
          manageEmployees();
        });
      });
  });
};

//function to add new employee
const addNewEmployee = () => {
  //prompt user with question to generate new employee in database
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter the new employee's first name.",
        //validate - a value must be entered
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("The employee's first name must be entered!");
          }
        },
      },
      {
        type: "input",
        name: "last_name",
        message: "Please enter the new employee's last name.",
        //validate - a value must be entered
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("The employee's last name must be entered!");
          }
        },
      },
    ])
    .then((names) => {
      //deconstruct "name:" and save as choice parameter
      const newEmplArray = [names.first_name, names.last_name];
      //query to select role id and title from role table
      const sql = `SELECT role.id, role.title FROM role`;
      //databse query
      db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
        }
        //create new array with key and value for role to choose from
        const chooseRole = res.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        //prompt user with list of roles available in database
        inquirer
          .prompt([
            {
              type: "list",
              name: "role",
              message: "Select a role ",
              //choices : chooseRole array
              choices: chooseRole,
            },
          ])

          .then((choice) => {
            //save choice.role as empRole
            const role = choice.role;
            //push role to employee array
            newEmplArray.push(role);
            //save sql query - choose list of managers
            const sql = `SELECT * FROM employee WHERE manager_id = 36 OR manager_id is NULL`;
            //sql query
            db.query(sql, (err, res) => {
              if (err) {
                console.log(err);
              }
              //create new array with key and value for role to choose from
              const chooseManager = res.map(
                ({ id, first_name, last_name }) => ({
                  name: first_name + " " + last_name,
                  value: id,
                })
              );

              //prompt user with a list of managers to choose from if new Employee has a manager

              inquirer
                .prompt([
                  {
                    //does new employee have a manager?
                    type: "confirm",
                    name: "addManager",
                    message: "Does the new Employee have a manager?",
                    default: false,
                  },
                  {
                    type: "list",
                    name: "managers",
                    message: "Please select from this list of managers",
                    choices: chooseManager,
                    //only prompted when 1st prompt is true
                    when: function (managers) {
                      return managers.addManager === true;
                    },
                  },
                ])
                .then((choice) => {
                  //declare empty variable to use in if statement
                  let chosenManager;
                  if (choice.manager) {
                    //let chosenManager = choice
                    chosenManager = choice.manager;
                  } else {
                    //let chosen manager = null
                    chosenManager = null;
                  }
                  //push chosenManager to Employee Array
                  newEmplArray.push(chosenManager);
                  //sql variable to use in db.query - INSERT INTO employee(.....)
                  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                  Values (?, ?, ?, ?)`;
                  //database query - use newEmplArray as paramater to INSERT employee into db
                  db.query(sql, newEmplArray, (err, res) => {
                    if (err) {
                      console.log(err);
                    }
                    //If successfull, print success message for user
                    console.log("Employee successfully added to roster!");
                    //call initializing function to return to inquirer prompt
                    manageEmployees();
                  });
                });
            });
          });
      });
    });
};

//function to remove employee
const removeEmployee = () => {
  //database query using sql to select all employee
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) {
      console.log(err);
    }
    //create new array with key and value for role to choose from
    const chooseEmployee = res.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    //prompt user with list of employee to choose from
    inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "Which employee would you like to delete?",
          choices: chooseEmployee,
        },
      ])
      .then((choice) => {
        const { employee } = choice;
        const sql = `DELETE FROM employee WHERE id = ?`;
        db.query(sql, employee, (err, res) => {
          console.log(err);
        });
        //If successfull, print success message for user
        console.log(`Employee was deleted from the database!`);
        //call initializing function to return to main prompt
        manageEmployees();
      });
  });
};

const updateEmplRole = () => {
  //db query with SQL to select all employees
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) {
      console.log(err);
    }
    //create new array with key and value for role to choose from
    const chooseEmployee = res.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    //prompt user to with list of all employees
    inquirer
      //select which employee
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "Which employee would you like to update?",
          choices: chooseEmployee,
        },
      ])
      .then((choice) => {
        //save into insertion array
        const emplInfo = [choice.employee];
        //db query to select all roles
        db.query(`SELECT * FROM role`, (err, res) => {
          if (err) {
            console.log(err);
          }
          //create new array with key and value for role to choose from
          const chooseRole = res.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          //prompt user with list of roles to choose from
          inquirer
            .prompt({
              type: "list",
              name: "role",
              message: "Select the employee's new role",
              choices: chooseRole,
            })
            .then((choice) => {
              //add role to start of emplInfo array to keep correct order
              emplInfo.unshift(choice.role);
              //update the employee's role
              const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
              // db query using sql variable and new employee info
              db.query(sql, emplInfo, (err, res) => {
                if (err) {
                  console.log(err);
                }
                //If successfull, print success message for user
                console.log("The employee's role was successfully updated!");
                //call initializing function to return to main prompt
                manageEmployees();
              });
            });
        });
      });
  });
};

const updateEmplManager = () => {
  //db query with SQL to select all employees
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) {
      console.log(err);
    }
    //create new array with key and value for role to choose from
    const chooseEmployee = res.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    // prompt user with a list of all employees to choose from
    inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "Which employee would you like to update?",
          choices: chooseEmployee,
        },
      ])
      .then((choice) => {
        //create an array to hold employee information
        const emplInfo = [choice.employee];
        //query to Select all employees with no manager or manager id = 36 (general manager)
        const sql = `SELECT * FROM employee WHERE manager_id = 36 OR manager_id is NULL`;
        //database query
        db.query(sql, (err, res) => {
          if (err) {
            console.log(err);
          }
          //create new array with key and value for role to choose from
          const chooseManager = res.map(({ id, first_name, last_name }) => ({
            name: first_name + " " + last_name,
            value: id,
          }));

          //prompt user with list of managers to choose from
          inquirer
            .prompt({
              type: "list",
              name: "manager",
              message: "Select new manager",
              choices: chooseManager,
            })
            .then((choice) => {
              //ensure proper order employee info so it can be inserted into database correctly
              emplInfo.unshift(choice.manager);
              const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
              // update employee with new manager
              db.query(sql, emplInfo, (err, res) => {
                if (err) {
                  console.log(err);
                }
                //If successfull, print success message for user
                console.log("The employee's manager was successfully updated!");
                //call initializing function to return to main prompt
                manageEmployees();
              });
            });
        });
      });
  });
};
