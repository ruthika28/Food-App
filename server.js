//install and import express
const exp = require("express");

const bodyParser = require('body-parser');

//import adminApp and userApp
//get express obj
const app = exp();

//import path module
const path = require("path");

//connect server.js with angular app of dist folder
app.use(exp.static(path.join(__dirname, './dist/food-app')));
app.use(exp.json({ limit: '50mb' }));
app.use(exp.urlencoded({ extended: true, limit: '50mb' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const adminApp = require("./apis/adminapi")
const userApp = require("./apis/userapi")
const articleOperationApp = require("./apis/articleoperationapi");
const categoryOperationApp = require("./apis/categoryoperationapi");
const fileUploadApp = require("./apis/fileuploadapi");
const recipeOperationApp=require("./apis/recipeoperationapi")
//forwarding req object to apis
app.use("/admin", adminApp);
app.use("/user", userApp);
app.use("/article", articleOperationApp);
app.use("/category", categoryOperationApp);
app.use("/uploadfile",fileUploadApp);
app.use('/recipe',recipeOperationApp)

//assign port no
const port = 3000;
app.listen(port, () => { console.log(`server running on port ${port}`) })