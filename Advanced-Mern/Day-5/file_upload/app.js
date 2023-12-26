const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.json());

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})

const upload = multer({storage:storage});

app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({message:"File uploaded successfully"});
})


app.listen(3000,()=>{
    console.log("Listening");
})

