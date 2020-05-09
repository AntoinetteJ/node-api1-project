const express = require('express');
const shortid = require('shortid')
const server = express();

server.use(express.json());



let users = [
    {
    id: "",
    name: "",
    bio: ""
    }
];

server.get('/', (req, res) =>{
    res.send('Hello Antoinette');
})

server.post('/api/users', (req, res) =>{
    const usersInfo = req.body;
    console.log(users);

    users.id = shortid.generate();
    users.push(usersInfo);

    res.status(201).json(usersInfo);
    const {name} =req.params;
    const postIt = users.find( user => user.name === name);
    if (postIt === ""){
        res.status(400).json("Please provide name and bio for the user.");
    }
})
//--------------------------------------------------------
server.get('/api/users', (req, res) => {
   
   res.status(201).json(users);
});
//-------------------------------------------------------
server.delete('api/users/:id', (req, res) => {
    const {id} = req.params;

    const found = users.find(user => user.id === id);
    if(found){
        users = users.filter(user => user.id !== id);
        res.status(200).json(found);
    } else {
        res.status(400).json("Did not delete")
    }
});
//------------------------------------------------------------


const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
})