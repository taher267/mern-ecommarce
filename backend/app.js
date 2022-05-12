const express = require('express');
const app = express();
const errorMiddlewire = require('./middlewires/error/error');
app.use(express.json())
//Routes Import
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
//Product Routes
app.use('/api/v1', product);

//Product Routes
app.use('/api/v1', user);

//Middlewire for error
app.use(errorMiddlewire);

module.exports = app;