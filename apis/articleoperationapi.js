const exp = require("express");
const articleOperationApp = exp.Router();
articleOperationApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var articleId;
articleOperationApp.post('/add', (req, res) => {
    // articleOperationApp.post('/article-operation/add',(req,res)=>{
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    articleCollectionObj.insertOne(req.body, (err, success) => {
        if (err) {
            console.log('error');
        } else {
            res.send({ message: "sucessfully added" });
        }
    })
});

articleOperationApp.get('/get', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    articleCollectionObj.find({
        endedOn: null
    }).sort({ "createdOn": -1 }).toArray(function (err, data) {
        if (err) {
            console.log(err);
            return res.status(404).end();
        }
        return res.status(200).send(data);
    });
    var bcrypt = require("bcrypt")
    articleOperationApp.post('/article-operation/add', (req, res) => {
        var articleCollectionObj = dbo.getDb().articleCollectionObj;

    });
});
module.exports = articleOperationApp;