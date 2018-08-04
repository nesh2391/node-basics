var fs=require('fs');
var http=require('http');
var express=require('express');

var app=express();

// var server = http.createServer(
//     (req,resp)=>{
//         resp.writeHead(200,{'Content-Type':'text/html'});
//         var readStream=fs.createReadStream('./one.html','utf-8');
//         readStream.pipe(resp);
//     }
// ).listen(3000);

app.get('/',(req,resp)=>{
    resp.send("This is home page");
});

app.get('/about',(req,resp)=>{
    resp.send("This is another page")
});

app.listen(3000);
console.log("Server is up and running");