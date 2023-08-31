// const express=require('express');
// const app=new express();
//
//
// app.use((req,res,next)=>{
//
//     console.log("Middle ware check..");
//     next();
// })
// app.get('/',(req,res)=>{
//     res.send("home page");
// })
// app.get('/about',(req,res)=>{
//     res.send("about page");
// })
// app.get('/contact',(req,res)=>{
//     res.send("contact page");
// })
// app.listen(8000,()=>{
//     console.log("application middle ware");
// }


//Routing Middleware example

const express=require('express');
const app=new express();

app.use('/about',(req,res,next)=>{
    console.log("this aboutpage testing middleware....");
    next();
})

app.use((req,res,next)=>{
    console.log('hello Application Middleware..');
    next();
})


app.get('/',(req,res)=>{
    res.send("this is home page");
})
app.get('/about',(req,res)=>{
    res.send("About page");
})
app.get('/contact',(req,res)=>{
    res.send("contact page");
})

app.listen(5000,()=>{
    console.log("Middle ware create successfully...");

})