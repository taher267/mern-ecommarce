const express = require('express'); 
const app = express();
const errorMiddlewire = require('./middlewires/error/error');
app.use(express.json())
//Routes Import
const product = require('./routes/productRoute');
app.use('/api/v1', product);
//Middlewire for error
app.use(errorMiddlewire);

module.exports = app;