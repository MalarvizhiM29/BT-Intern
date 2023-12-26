const express = require("express");
const multer = require('multer');

const app=express();

const storage = multer.diskStorage({
    destination: ((req,res,cb)=>{
        cb(null,'uploads/');
    }),
    filename:((req,res,cb)=>{
        cb(null,Date.now() + '-' + file.originalname)
    })
})

const upload = multer({storage:storage});

app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({message:"File submitted Successfully"})
})

app.listen(3000,()=>{
    console.log("Port Listening");
})