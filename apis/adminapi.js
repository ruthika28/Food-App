//create mini express appn and handle admin req
const exp=require("express");
const adminApp=exp.Router();

//import dbo from db.js
const dbo=require("../db");
dbo.initDb();

//localhost:port/admin/login (POST)
//localhost:port/admin/readprofile/username (GET)

//adminApp.get('/readprofile/:username',(req,res)=>{
  //  res.send({message:"admin profile works"})
//});

adminApp.post('/login',(req,res)=>{
    res.send({message:"admin login works"})
});

//export adminApp
module.exports=adminApp;