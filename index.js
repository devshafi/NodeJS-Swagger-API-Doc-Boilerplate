const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
// Add this line to enable JSON parsing
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "A sample API for learning Swagger"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Your API routes go here

app.listen(3000, () => console.log("Server running on port 3000"));
