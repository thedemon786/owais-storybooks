const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//passport config
require('./config/passport')(passport);

//load routes
const auth = require('./routes/auth');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("IT works i think");
});

//use routes
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});