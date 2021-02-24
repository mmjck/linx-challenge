const express = require("express");
const cors = require('cors');
const router = require("./src/config/router");


const hostname = '127.0.0.1';
const port = 3001;

const app = express();

app.use(cors());

app.use(router);




app.listen(port, hostname,  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


