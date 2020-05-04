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
});

articleOperationApp.get('/getArticleByUsername/:username', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    let username = req.params.username;
    articleCollectionObj.find(
        {
            createBy: username
        }).sort({ "createdOn": -1 }).toArray(function (err, data) {
            if (err) {
                console.log(err);
                return res.status(404).end();
            }
            return res.status(200).send(data);
        });

});

articleOperationApp.get('/noOfArticles/:username',(req,res)=>{
    var articleCollectionObj=dbo.getDb().articleCollectionObj;
    let username=req.params.username;
    articleCollectionObj.count({createBy: username},(err,data)=>{
        if(err) {
            console.log(err);
            return res.status(404).end();   
        } else{
            return res.status(200).send({count:data});
        }
    })
})

articleOperationApp.delete('/remove/:id',(req,res)=>{
    var articleCollectionObj=dbo.getDb().articleCollectionObj;
    let id=req.params.id;
    const {ObjectId}=require("mongodb");
    articleCollectionObj.deleteOne({_id:ObjectId(id)},(err,success)=>{
        if(err){
            console.log(err);
            return res.status(404).end(); 
        } else{
            return res.status(200).send({message:"successfully deleted"});
        }
    })
})

module.exports = articleOperationApp;