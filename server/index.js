/*
 * Created on Nov 03 2020
 *
 * Shubham Mishra
 */
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const server = require('http').Server(app);
const cors = require('cors');
const mysql = require('mysql');



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());



require("./routes/users.route.js")(app);
require("./routes/admins.route.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Complaint Management System Server APIs" });
});

/////////////////////////////
app.listen(8000, () => {
    console.log("SQL Server is started on port 8000");
});