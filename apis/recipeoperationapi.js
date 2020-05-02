const exp = require("express");
const recipeOperationApp = exp.Router();
recipeOperationApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt")
const cloudinary=require("cloudinary");
const cloudinaryStorage=require("multer-storage-cloudinary");
const multer=require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name: 'do8ujullm',
    api_key: '276121795183361',
    api_secret: 'p5tF0tDi8R-RYXXQFjM4zBcU3gk'
});

//configure cloudinary storage details

var storageForCloudinary=cloudinaryStorage({
    cloudinary:cloudinary,
    folder:'recipefiles',
    allowedFormats:['jpg','png','jpeg'],
    filename:function(req,file,cb)
    {
        //cb=callback fn
        cb(undefined,file.fieldname +'-'+Date.now());    
    }
});

//configure multer
var upload=multer({storage:storageForCloudinary});





recipeOperationApp.post('/add',upload.single('photo'),(req,res)=>{
    //console.log("recipe obj is",req.body);
    // res.send({message:"user login works"})
    req.body=JSON.parse(req.body.userObj);

    req.body.profileImage=req.file.secure_url; 

    //remove key "photo"
    delete req.body.photo;

    //console.log("req body is", req.body);
    //console.log("cdn link of uploaded image is ",req.file.secure_url);
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

recipeOperationApp.get('/get-recipe',(req,res)=>{
    var recipeCollectionObj=dbo.getDb().recipeCollectionObj;
    recipeCollectionObj.find({}).toArray(function(err, recipeObj) {
        if(err)
        {
            console.log("error is ", err);
        }
        else
        {
            res.send({message:"Recipe Collections",recipeObj:recipeObj});
        }
    })
});


recipeOperationApp.get('/display/:id',(req,res,next)=>{
    
    var recipeCollectionObj=dbo.getDb().recipeCollectionObj;
    var x=req.params.id;
    const {ObjectId} = require('mongodb');
    //console.log("id is ",x);
    recipeCollectionObj.findOne({_id:ObjectId(x)},(err,recipeObj)=> {
        if(err)
        {
            console.log("error is ", err);
        }
        else
        {
            //console.log("recipe obj is",recipeObj);
            //console.log("recipe obj is",recipeObj[x]);   
            res.send({data:recipeObj});
        }
    })   
}
);




module.exports = recipeOperationApp;