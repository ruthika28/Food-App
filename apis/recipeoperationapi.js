const exp = require("express");
const recipeOperationApp = exp.Router();
recipeOperationApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt")
recipeOperationApp.post('/add',(req,res)=>{
    console.log("recipe obj is",req.body);
    // res.send({message:"user login works"})
    var recipeCollectionObj = dbo.getDb().recipeCollectionObj;
    recipeCollectionObj.insertOne(req.body, (err, success) => {
        if (err) {
            console.log('error')
        }
        else {
            res.send({ message: "recipe added successfully" })
        }
    })
});

module.exports = recipeOperationApp;