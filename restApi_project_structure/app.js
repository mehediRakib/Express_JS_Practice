const express=require('express');
const app=new express();

const router=require('./src/routing/api');
app.use('/route',router);
module.exports=app;