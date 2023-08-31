const express=require('express');
const obj=new express();
obj.get('/download',(req,res)=>{

    res.download('./abc.jpg');
})


obj.listen(8000,()=>{
    console.log("Runing download file succesfull");
})