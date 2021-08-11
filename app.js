const manageEmployees = require("./lib/index");
const db = require("./db/connection");

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  manageEmployees();
});
