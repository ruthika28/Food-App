const exp = require("express");
const articleOperationApp = exp.Router();
articleOperationApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt")
articleOperationApp.post('/article-operation/add',(req,res)=>{
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    
});

module.exports = articleOperationApp;