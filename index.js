const express=require('express');
app=express();
app.get('/',(req,res)=>{

    res.send("Welcome to Express js");
})
app.post('/about',(req,res)=>{
    res.send("About page");
})
app.put('/contact',(req,res)=>{
    res.send("contact page");
})
app.delete('/terms',(req,res)=>{
    res.send("contact page");
})


app.listen(8000,()=>{
    console.log("running succesfully...");
})