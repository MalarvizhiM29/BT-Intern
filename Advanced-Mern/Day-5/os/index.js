// const os = require('os');

// console.log(os.totalmem());
// console.log(os.freemem());

// http
// const http = require("http");

// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write("Hello");
//         res.end()
//     };

//     if(req.url = "/api/courses"){
//         res.write(JSON.stringify([1,2,3]));
//         res.end()
//     }
// });


// server.listen(3000,()=>{
//     console.log("Listening");
// })



//logger
// var url = 'http://mylogger.io/log'

// function log(message){
//     console.log(message);
// }

//path
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

//file system

const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log(err);
    else console.log(files)
})
