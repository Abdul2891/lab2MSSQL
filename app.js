const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app =express();
var corsOption ={
    origin : "http://localhost:8080"};
    app.use(cors (corsOption));
 if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
 }  
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next) => {
    console.log('Hello from the middleware');
    next();
 });
 const salesRouter =require('./routes/salesRoutes');
 const userRouter =require('./routes/userRoutes');
 app.use('/api/v1/sales',salesRouter);
 app.use('/api/v1/user',userRouter);
 module.exports = app;