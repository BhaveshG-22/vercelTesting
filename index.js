const express = require('express')

const app=express();
const port=9000;

app.listen(9000,()=>{
    console.log("App runing on port 9000");
})

app.get("/",(req,res)=>{
    res.send("Working")
})