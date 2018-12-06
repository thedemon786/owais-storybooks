const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//load user model
require('./models/User');

//passport config
require('./config/passport')(passport);

//load routes
const index = require('./routes/index');
const auth = require('./routes/auth');

//mongoose connect and load keys and map global promise
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
.then(() => console.log('mongo connected'))
.catch(err => console.log(err));

const app = express();

//handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false

}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
const port = process.env.PORT || 3000;

//set global variables
app.use((req, res, next) =>{
res.locals.user = req.user || null;
next();
});

//use routes
app.use('/', index);
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});