var express=require('express');
// var bodyParser=require('body-parser');
var app =new express();

// app.use(bodyParser.json());

// app.post('/',(req,res)=>{
//     let jsonData=req.body;
//     // const JsonString=JSON.stringify(jsonData);
//     // res.send(JsonString);
//     // res.end();
//
//     const name=jsonData['name'];
//     const city=jsonData['city'];
//     res.send(name+" "+city);
//
//
// })

const bodyparser=require('body-parser');
app.use(bodyparser.json());

app.post('/',(req,res)=>{

    const jsondata=req.body
    const jsonString=JSON.stringify((jsondata));
    res.send(jsonString);
})



app.listen(8000,()=>{
    console.log("hello this is json Data analysis");
})