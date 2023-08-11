const empController = require("../controller/addEmployee.controller");
var express = require("express");
var jwt =require('jsonwebtoken')
const com=require('../controller/common')
const authController = require('../controller/authController');



var router = express.Router();

/**
 * @swagger
 * /employee/generate-token:
 *   post:
 *     summary: Generates a JWT token
 *     parameters:
 *       - in: body
 *         name: payload
 *         description: The payload to include in the JWT
 *         schema:
 *           type: object
 *           required:
 *             - name   
 *           properties:
 * 
 *             name:
 *               type: string
 *           example:
 *             name: Tina
 *     responses:
 *       200:
 *         description: A successful response with a JWT token
 */
router.post('/generate-token', empController.addToken)
 
 // Define a sample endpoint to verify a JWT token
 /**
  * @swagger
  * /employee/verify-token:
  *   get:
  *     summary: Verifies a JWT token
  *     parameters:
  *       - in: query
  *         name: token
  *         schema:
  *           type: string
  *         required: true
  *         description: The JWT token to verify
  *     responses:
  *       200:
  *         description: A successful response if the token is valid
  *       401:
  *         description: Unauthorized if the token is invalid
  */
router.get('/verify-token',empController.verifyToken)


router.post("/add-emp",authController.loginUser, empController.addEmp);
// Define the "Add Employee" endpoint
/**
 * @swagger
 * /employee/add-emp:
 *   post:
 *      description: Used to add employee
 *      tags:
 *          - Add Employee
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: body
 *            name: EmployeeData
 *            description: Employee data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - empID
 *                 - phone
 *              properties:
 *                  name:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Tina
 *                  empID:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: emp123
 *                  phone:
 *                      type: integer
 *                      example: 1234567896
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/get-all-emp", empController.getAllEmp);
/**
 * @swagger
 * /employee/get-all-emp:
 *   get:
 *      description: Used to get all employee
 *      tags:
 *          - Get all employee
 *      responses:
 *          '200':
 *              description:  Get all employee
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/edit-emp", empController.editEmp);
/**
 * @swagger
 * /employee/edit-emp:
 *   put:
 *      description: Used to dilike post
 *      tags:
 *          - Edit employee
 *      parameters:
 *          - in: query
 *            name: id
 *            type: integer
 *            description: id
 *            required: true
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Tina
 *                  empID:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: emp123
 *                  phone:
 *                      type: integer
 *                      example: 1234567896
 *      responses:
 *          '200':
 *              description: Update successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/delete-emp", empController.deleteEmp);
/**
 * @swagger
 * /employee/delete-emp:
 *   delete:
 *      description: Used to delete employee
 *      tags:
 *          - Delete employee
 *      parameters:
 *          - in: query
 *            name: id
 *            type: integer
 *            description: id
 *            required: true
 *      responses:
 *          '200':
 *              description: Deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/info-emp", empController.infoEmp);
/**
 * @swagger
 * /employee/info-emp:
 *   get:
 *      description: Used to info employee
 *      tags:
 *          - info employee
 *      parameters:
 *          - in: query
 *            name: id
 *            type: integer
 *            description: id
 *            required: true
 *      responses:
 *          '200':
 *              description: Get info employee
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
