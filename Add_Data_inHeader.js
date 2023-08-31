const express=require('express');
const obj= express();
obj.get('/head',(req,res)=>{

    res.append("name","Mehedi Rakib");
    res.append("city","Cumilla");
    res.append("university","Cumilla University");
    res.status(405).end("running on 405 status code");
})



obj.listen(5000,()=>{
    console.log("running succesfull..");
})