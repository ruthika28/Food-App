const exp = require("express");
const recentActionsApp = exp.Router();
recentActionsApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt")
recentActionsApp.post('/add-action',(req,res)=>{
    console.log("recent action obj is",req.body);
    var recent_actions_collectionObj = dbo.getDb().recent_actions_collectionObj;
    recent_actions_collectionObj.insertOne(req.body, (err, success) => {
        if (err) {
            console.log('error',err)
        }
        else {
            res.send({ message: "recent action added successfully" })
        }
    })
});

module.exports = recentActionsApp;