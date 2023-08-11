const db = require("../config/db.config");


exports.addEmpPost = (data, callback) => {
  db.query(
    `INSERT INTO employee (name, empID, phone)
    VALUES (?, ?, ?)`,
    [data.name, data.empID, data.phone],
    (error, results, fields) => {

      if (error) {
        return callback(error);
      }
      return callback(null, "Employee added successfully");
    }
  );
};

exports.getAllEmp = (data, callback) => {
    db.query(
      `SELECT p.* FROM employee AS p`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };

  exports.editEmp = (data, callback) => {
    db.query(
      `UPDATE  employee
      SET 
      name =  '${data.name}',
      empID = '${data.empID}',
      phone = '${data.phone}'
      WHERE 
      id = ?`,
      [data.id],
      (error, results, fields) => {
        console.log(results)
        if (error) {
          return callback(error);
        }
        if (results.affectedRows === 1) {
          return callback(null, `Updated Successful`);
        } else {
          return callback(new Error("Invalid post"));
        }
      }
    );
  };

  exports.deleteEmp = (data, callback) => {
    db.query(
      `DELETE FROM employee 
      WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.affectedRows === 1) {
          return callback(null, `Employee Deleted Successfully`);
        } else {
          return callback(new Error("Invalid post"));
        }
      }
    );
  };

  
  exports.info = (data, callback) => {
    db.query(
      `select * FROM employee
      WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
            return callback(error);
          }
          return callback(null, results);
      }
    );
  };