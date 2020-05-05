//create mini express appn and handle admin req
const exp = require("express");
const userApp = exp.Router();
userApp.use(exp.json())
//import dbo from db.js
const dbo = require("../db");
dbo.initDb();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt")
//userApp.get('/readprofile/:username',(req,res)=>{
//  res.send({message:"user profile works"})
//});

userApp.post('/login', (req, res) => {
    // console.log("user obj is",req.body);
    // res.send({message:"user login works"})

    //verify username
    var userCollectionObj = dbo.getDb().userCollectionObj;
    userCollectionObj.findOne({ username: req.body.username }, (err, userObj) => {
        if (err) {
            console.log("err in read", err);
        }
        else if (userObj == null) {
            res.send({ message: "invalid username" });
        }
        else {
            bcrypt.compare(req.body.password, userObj.password, (err, result) => {
                if (err) {
                    console.log("err in compare", err);
                }
                else if (result == false) {
                    res.send({ message: "invalid password" });
                }
                else {
                    //create a token and send it to client
                    jwt.sign({ username: userObj.username }, 'ssshhh', { expiresIn: 60 }, (err, signedToken) => {
                        if (err) {
                            console.log("err", err);
                        }
                        else {
                            res.send({ 
                                message:"success",
                                token:signedToken,
                                username: userObj.username, 
                                userid:userObj._id,
                                role:userObj.role});
                        }
                    })
                }
            })
        }
    })
});
userApp.post('/register', (req, res) => {
    // console.log(req.body);
    //res.send({message:"user register works"})
    //check for user
    var userCollectionObj = dbo.getDb().userCollectionObj;
    userCollectionObj.findOne({ username: req.body.username }, (err, userObjFromDb) => {
        if (err) {
            console.log("err in register", err)
        }
        else if (userObjFromDb != null) {
            res.send({ message: 'username already existed' })
        }
        else {
            var hashedPassword = bcrypt.hashSync(req.body.password, 7)
            req.body.password = hashedPassword
            delete req.body['passwordCnfrm'];
            userCollectionObj.insertOne(req.body, (err, success) => {
                if (err) {
                    console.log('error')
                }
                else {
                    res.send({ message: "register successful" })
                }
            })
        }
    })
})

//export userApp
module.exports = userApp;