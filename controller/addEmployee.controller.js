const empService = require("../services/addEmployee.service");
var jwt =require('jsonwebtoken')

exports.addToken= async function (req,res){
  const { name } = req.body;
  const payload = name
  const secretKey = 'Ajith';
  const token = jwt.sign(payload, secretKey);
  res.json({ token });
}

exports.verifyToken= async function(req,res){
  const { token } = req.query;
   const secretKey = 'your-secret-key';
   
   try {
     const decoded = jwt.verify(token, secretKey);
     console.log("decoded",decoded)
     res.json({ message: 'Token is valid', decoded });
   } catch (error) {
     res.status(401).json({ message: 'Token is invalid' });
   }
}



exports.addEmp = (req, res, next) => {
  const data = {
    name: req.body.name,
    empID: req.body.empID,
    phone: req.body.phone,
  };

  empService.addEmpPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAllEmp = (req, res, next) => {
    const data = {};
    empService.getAllEmp(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };

  exports.editEmp = (req, res, next) => {
    const data = {
        id: req.query.id,
        name: req.body.name,
        empID: req.body.empID,
        phone: req.body.phone,
    };
    empService.editEmp(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };
  exports.deleteEmp = (req, res, next) => {
    const data = {
      id: req.query.id,
    };
    empService.deleteEmp(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };

  exports.infoEmp = (req, res, next) => {
    const data = {
      id: req.query.id,
    };
    empService.info(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };