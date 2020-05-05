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

articleOperationApp.get('/getArticleByUsername/:id', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    let userid = req.params.id;
    articleCollectionObj.find(
        {
            createdById: userid
        }).sort({ "createdOn": -1 }).toArray(function (err, data) {
            if (err) {
                console.log(err);
                return res.status(404).end();
            }
            return res.status(200).send(data);
        });

});

articleOperationApp.get('/noOfArticles/:id', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    let userid = req.params.id;
    articleCollectionObj.countDocuments({ createdById: userid }, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).end();
        } else {
            return res.status(200).send({ count: data });
        }
    })
})

articleOperationApp.delete('/remove/:id', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    let id = req.params.id;
    const { ObjectId } = require("mongodb");
    articleCollectionObj.deleteOne({ _id: ObjectId(id) }, (err, success) => {
        if (err) {
            console.log(err);
            return res.status(404).end();
        } else {
            return res.status(200).send({ message: "successfully deleted" });
        }
    })
});

articleOperationApp.put('/removeSelectedArticles', (req, res) => {
    var articleCollectionObj = dbo.getDb().articleCollectionObj;
    let idArray = [];
    const { ObjectId } = require("mongodb");
    for (let i = 0; i < req.body.length; i++)
        idArray[i] = ObjectId(req.body[i]);
    var filter = { _id: { $in: idArray } };
    articleCollectionObj.deleteMany(filter, (err, success) => {
        if (err) {
            console.log(err);
            return res.status(404).end();
        } else {
            return res.status(200).send({ message: "successfully deleted" });
        }

    })
})

module.exports = articleOperationApp;