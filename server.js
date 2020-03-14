//install and import express
const exp=require("express");
//import adminApp and userApp
//get express obj
const app=exp();
//import path module
const path=require("path");

//connect server.js with angular app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/food-app')))

const adminApp=require("./apis/adminapi")
const userApp=require("./apis/userapi")
//forwarding req object to apis
app.use("/admin",adminApp);
app.use("/user",userApp);


//assign port no
const port=3000;
app.listen(port,()=>{console.log(`server running on port ${port}`)})