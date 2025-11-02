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
})