const express = require('express');
const app = express();
const port = 8080;

app.get('/search', (req, res) => {
    const {q, category} = req.query;
    res.send(`Search query: ${q}, Category: ${category} || none`);
});

app.listen(port, () => {
    console.log(`Example of the port http://localhost:${port}`);
})

let users = [
    {id:1, name:"jhon", gmail:"josephsajsawasawa@gmail.com"},
    {id:2, name:"body", gmail: 'example@gmail.com'}
];

app.use(express.json());
app.get('api/users', (req, res) => {
    res.json("not found")
});

app.get('api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(res.params.id));
    if (!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});

app.post('/app/users', (req, res) => {
    const newUser = {
        id: users.length+1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('api/users/id', (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message:'User not found'});

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
})

app.delete('api/users/:id', (req,res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({message:"user not found"});

    const deleteUser = users.splice(userIndex, 1);
    res.json(deleteUser[0]);
});