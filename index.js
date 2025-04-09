const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Dockerized Node.js API!');
});

app.listen(3000, () => {
    console.log('App running on http://localhost:3000');
});
