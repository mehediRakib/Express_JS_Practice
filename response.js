// const express=require('express');
// const obj=new express();
//
// obj.get('/',(req,res)=>{
//     res.send("Home page");
// })
// obj.post('/about',(req,res)=>{res.send("this is about page")});
//
// obj.listen(4000,()=>{
// console.log("server run success");
// })

///response status code manipulate


const express=require('express');
const app=new express();
app.get('/status',(req,res)=>{
    res.status(504).end("unathorised..");
})


app.listen(8000,()=>{
    console.log("welcome to response status code");
})
