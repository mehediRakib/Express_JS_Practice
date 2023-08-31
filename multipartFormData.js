const express=require('express');
const multer=require('multer');
const app= new express();
const multer1= multer();
app.use(multer1.array());
app.use(express.static('public'));
app.post('/',(req,res)=>{

    const jsonData=req.body;
    res.send(JSON.stringify(jsonData));
    res.end();
})



app.listen(7000,()=>{
    console.log("example of multipart form data...managing successfully..");
})


