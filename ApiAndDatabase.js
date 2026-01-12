const express = require('express');
const app = express();
const port = 8080;

const Joi = require("joi");

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.string().min(18).required()
});

app.post('api/users', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(404).json({message: error.detail[0].message});
    }

    res.status(201).json({message: 'User created successfully'});
});

app.listen(port);

const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'SAJ',
    resave: false,
    cookie: { secure: process.env.NODE_ENV === 'PRODUCTION', maxAge: 24 * 60 * 60 * 1000}
}));

const users = [
    {id:1, username: 'user' , password: 'password'}
];

app.post('/login', (req, res) => {
    const { username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    }
});

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Mamanalucie1906@@",
})

connection.connect(function(err) {
    if (err) console.log(err);
    console.log("connected");
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Result:" + result);
    });
});

connection.query(function(err) {
    if (err) throw err;
    console.log("Connected");
    let sqlcode = "CREATE DATABASE SAJ; USE SAJ; CREATE TABLE Goku(Id INT (255) NOT NULL PRIMARY KEY)";
    let testCode = "DROP TABLE Goku"
    connection.query(sqlcode, function(err, result){
        if (err) throw err;
        console.log("Table created");
    });
    connection.query(testCode, function(err, result){
        if (err) throw err;
        console.log("Table dropped");
    });
})

const _ = require('lodash');
let example =_.fill([1,2,3,4,5],'SAJ',1,4);
console.log(example);