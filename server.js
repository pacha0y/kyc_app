var http = require('http');
var fs = require('fs');
var path = require("path");
var express = require("express");
var request = require('request');
var mysql = require('mysql');
var db = require(__dirname + "/config/database.json")['development']

var app = express();

// Create a database/collection inside CouchDB
var con = mysql.createConnection({
    host: db.host,
    user: db.username,
    password: db.password,
    database: db.database
});

con.connect(function(err) {
    if (err) throw err;
    sql = "SELECT * FROM customers"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(`>> ${sql}`)
        console.log(result);
    });
});



app.use(function(req, res, next){
    console.log(`${req.method} for ${req.url}`);
    next()
});

app.use(express.static("./public"));

app.listen(3000)

console.log("Application running on http://localhost:3000");