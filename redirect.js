const express=require('express');
const obj=new express();

obj.get('/bangladesh',(req,res)=>{
    res.redirect("http://localhost:8000/india");
})
obj.get('/india',(req,res)=>{
    res.redirect("http://localhost:8000/america");
})
obj.get('/america',(req,res)=>{
    res.send("This is america..welcome to Bangladesh");
})

obj.listen(8000,()=>{
    console.log("Hello redirect link");
});