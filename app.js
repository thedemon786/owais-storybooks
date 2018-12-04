const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("IT works i think");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});