const express=require('express');
const app=new express();
app.post('/',(req,res)=>{

    const firstName=req.query.firstName;
    const lastName=req.query.lastName;
    res.end(firstName+" "+lastName);
})

app.listen(8001,()=>{
    console.log("hello world");
})