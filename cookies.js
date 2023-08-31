const express=require('express');
const obj=new express();
obj.get('/cookie',(req,res)=>{

    res.cookie("name","Rakib");
    res.cookie("city","Chandpur");
    res.cookie("University","Comilla University");
    res.end("Cookie set successful");
})

//Clear cookies

obj.get('/clearCookie',(req,res)=>{
    res.clearCookie('name');
    res.clearCookie('city');
    res.end("Clear cookie successful");
})

obj.listen(8000,()=>{
   console.log("Cookie set successfull");;
})