const http=require('http');
function createServer(){

    const server=http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("server is creating");

    })

    server.listen(8000,()=>{
        console.log("Running on port number 8000");
    })
}
createServer();