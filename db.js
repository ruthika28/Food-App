//import mongodb driver
var mc=require("mongodb").MongoClient;
//to hold db object
var dbo;
var userCollectionObj;
var adminCollectionObj;
var articleCollectionObj;
var recipeCollectionObj;
//database url
var dbUrl="mongodb+srv://project:project@cluster0-donss.mongodb.net/test?retryWrites=true&w=majority";
//var dbUrl="mongodb+srv://keerthi:keerthi@cluster0-i25dr.mongodb.net/test?retryWrites=true&w=majority";
//function to initialise database
function initDb() {
    mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
        if(err) {
            console.log("error in connecting in db");
        }
        console.log("connected to database");
        dbo=client.db("userdb");
        userCollectionObj = dbo.collection("usercollection");
        adminCollectionObj = dbo.collection("admincollection");
        articleCollectionObj = dbo.collection("articlecollection");
        recipeCollectionObj=dbo.collection("recipecollection")
    })
}
//function to return db object
function getDb() {
   // console.log(dbo,"db has not been initialised.please call init");
    return {
        userCollectionObj:userCollectionObj,
        adminCollectionObj:adminCollectionObj,
        articleCollectionObj:articleCollectionObj,
        recipeCollectionObj:recipeCollectionObj
    }
}
//export 2 functions
module.exports={
    getDb,
    initDb
}