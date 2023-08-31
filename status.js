const express=require('express');
const app=new express();
app.get('/',(req,res)=>{
    res.status(505).end("Statud code check")
})

app.listen(8000,()=>{
    console.log("Status code check successfull");
})