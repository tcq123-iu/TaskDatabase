const express = require('express');

const PORT = 8800;

const server = express();

server.get('/', (req, res) => {
    return res.json("hello this is backend");
})

server.listen(8800, ()=> {
    console.log("Connected to backend");
})