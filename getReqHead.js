const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    const firstName=req.header('firstName');
    const lastName=req.header('lastName');
    res.end(firstName+" "+lastName );
})


app.post('/head',(req,res)=>{

    const userName=req.header('userName');
    const password=req.header('password');
    res.end(userName+" "+password);

})

app.listen(8000,()=>{

    console.log("allah is almigjty");
})