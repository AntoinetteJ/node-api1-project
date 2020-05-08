const express = require('express');

const server = express();

const PORT = 5000;

server.get('/', (req, res) => {
    res.send('Hello World from Express');

});

server.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
})