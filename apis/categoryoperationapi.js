const exp = require("express");
const categoryOperationApp = exp.Router();
categoryOperationApp.use(exp.json());
const dbo = require("../db");
dbo.initDb();

categoryOperationApp.post('/add', (req,res) => {
    var categoryCollectionObj = dbo.getDb().categoryCollectionObj;
    categoryCollectionObj.insertOne(req.body, (err,success) => {
        if (err) {
            console.log('error');
        } else {
            res.send({ message: "sucessfully added" });
        }
    })
});

categoryOperationApp.get('/get', (req,res) => {
    var categoryCollectionObj = dbo.getDb().categoryCollectionObj;
    categoryCollectionObj.find({
        endedOn: null
    }).toArray(function (err, data) {
        if(err) {
            console.log(err);
            return res.status(404).end();
        }
        return res.status(200).send(data);
    });
});
module.exports = categoryOperationApp;