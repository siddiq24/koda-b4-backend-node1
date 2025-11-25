const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/routers');
const swaggerjsdoc = require('express-jsdoc-swagger');

const option = {
    info: {
        version: '1.0.0',
        title: 'Employee API',
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    filesPattern: ['./src/**/*.js'],
    swaggerUIPath: '/api-docs',
    baseDir: __dirname
}

swaggerjsdoc(app)(option);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});