const express=require('express');
const obj=new express();


obj.get('/json',(req,res)=>{

    // const myJson=[
    //     {
    //         name:"Rakib",
    //         city:"Chandpur",
    //         Occupation:'Student',
    //     },
    //     {
    //         name:"Radifa",
    //         city:"cumilla",
    //         occupation:"Alema"
    //     },
    //     {
    //         name:"Rifat",
    //         city:"Cumilla",
    //         occupation:'Developer',
    //     }
    // ]

    // res.json(myJson);

    const arra=["rakib","Fatema","Nasrin","Mamun","Maichara"];
    res.json(arra);
})
obj.listen(8050,()=>{
    console.log("runnning successful..");
})