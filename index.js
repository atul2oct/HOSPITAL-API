const express = require('express'); //requiring express
const app = express(); //app has the properties of express
const passport = require('passport'); //requiring passport
const jwtPassportStrategy = require('./config/passport_jwt'); //passport jwt config file

// connect to the database mongoose connection
const db = require('./config/mongoose');
db();
// load config from dot env file
require('dotenv').config();
const PORT = process.env.PORT || 8000; //port on which server runs

//to parse form data
app.use(express.urlencoded({extended: true}));
// middleware to parse json request body
app.use(express.json());

//set up scalable routes
app.use('/', require('./routes/index'));

// start server
app.listen(PORT, function (err) {
    if (err) {
        console.log('An error occured in running the server!');
    }
    console.log(`Server is up and running on PORT :: ${PORT}`);
});