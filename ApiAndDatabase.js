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