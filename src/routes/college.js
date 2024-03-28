const express=require("express");
const Mainrouter=express.Router();
Mainrouter.get("/",(req,res)=>{
    res.send("myhomepage");
})
Mainrouter.post("/a",(req,res)=>{
    res.send("postmyhomepage");
})
module.exports=Mainrouter;