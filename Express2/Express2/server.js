//'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

// server.js
const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const app = express();

const sqlConfig = {
    user: 'fitfactweb',
    password: 'Fitness1',
    server: 'EHBWEBTEST\\SQLEXPRESS',
    database: 'fitfact',
    port: 1433
};

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, sql);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get('/exercises', (req, res) => {
    sql.connect(sqlConfig, function () {
        var request = new sql.Request();
        request.query('select * from exercises', function (err, recordset) {
            if (err) {
                console.log(err);
            } else {
                res.end(JSON.stringify(recordset)); // Result in JSON format 
            }
        });

    });

});

//sql.connect(dbConfig, function (err, database) {
//    if (err) {
//        console.log("Error while connecting database :- " + err);
//        res.send(err);
//    }
//    else {
//        console.log("database open.");
//        app.listen(port, () => {
//            console.log('We are live on ' + port);
//        });
//    }
//});

