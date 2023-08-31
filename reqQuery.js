const express=require('express');
const app=new express();

app.get('/query',(req, res)=>{

   const Firsname= req.query.Firstname;
   const Lastname= req.query.Lastname;
   res.end(Firsname+" "+Lastname);
})


app.listen(8050,()=>{
    console.log("Query check successfully..");
})