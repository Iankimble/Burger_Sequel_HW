// Require express and instance of express
var express = require("express");
var app =  express();

// Calling up public files
app.use(express.static("public"));

// boilerplate 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// EJS template
app.set("view engine","ejs",);

// calling the router to pages
var route = require();
app.use(route);

// port
var Port =  3000;
app.listen(port,function(){
    console.log("App is on at port "+ port);
});