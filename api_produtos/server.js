const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

const router = require("./src/config/router");

const database = require('./src/database/databaseConnection');
const loadDataBase = require('./src/database/loadData')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(router);

const hostname = '127.0.0.1';
const port = 3000;


database.then(async (_) => {
    try {
        await loadDataBase()
        app.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (error) {
        throw error;
    }
}).catch(() => {
    console.log('Sometime is wrong');
})
