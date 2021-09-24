//Constants
const express = require('express');
const app = express();
const db = require("./storage/db");
const bodyParser = require('body-parser');
const port = 3005;
const routerData = require("./routers/data.router");
const cors = require("cors");

//Middleware

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.json());



app.use(routerData);

//Server Runner
db
    .then(() => {
        app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err) => console.log(err.message))