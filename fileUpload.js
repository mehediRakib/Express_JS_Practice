// const express=require('express');
// const multer=require('multer');
// const app=new express();
//
// const storage=multer.diskStorage( {
//
//     destination:function(req,file,callback){
//         callback(null,'./uploads');
//     },
//     filename:function(req,file,callback){
//         callback(null,file.originalname);
//     }
// })
// const upload=multer({storage:storage}).single('myfile')
// app.post('/',(req,res)=> {
//     upload(req, res, (err) => {
//
//         if (err) {
//             res.send("file upload fail");
//         } else {
//             res.send("file upload success");
//         }
//
//     })
// })
// app.listen(8000,()=>{
//     console.log("file create successfully....");
// })


const express=require('express');
const  multer=require('multer');
const app=new express();

const storage=multer.diskStorage({

    destination:function(req,file,callback){
        callback(null,'./uploads');
},
filename: function(req,file,callback){
        callback(null,file.originalname);
}
})

const upload=multer({storage:storage}).single('filename');
app.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log("file upload fail..");
        }
        else{
            console.log("file upload successful...");
        }
    })
})
app.listen(8000,()=>{
    console.log("file upload successful....");
})