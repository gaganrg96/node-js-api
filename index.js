const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome Gagan to the Node.js Application API version 2');
});

app.listen(3000, () => {
    console.log('App running on http://localhost:3000');
});
