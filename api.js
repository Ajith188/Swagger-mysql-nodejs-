const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/addEmployee.routes");
const authRoutes=require('./routes/authRoutes')

app.use(bodyParser.json());


const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      version: '1.0.0',
      title: 'Employee API',
      description: 'API documentation',
      contact: {
        name: 'Developer',
      },
      servers: [`http://localhost:3002/`],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['api.js', './routes/*.js'],
  security: [{
    bearerAuth: [],
  }],
  docExpansion: 'none',
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/rest-api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/**  defining an endpoint */
app.use("/employee", employeeRoutes);

app.use('/auth',authRoutes)

/**  starting the server */
app.listen(3002, () => {
  console.log("Port no. is 3002");
});