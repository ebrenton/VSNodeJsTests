'use strict';
var http = require('http');
var url = require('url')

var fs = require('fs');

//var port = process.env.PORT || 1337;


const app = http.createServer((req, res) => {

    fs.appendFile('Page1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.readFile('Page1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });


    console.log('hit - ' + req.url)
});

app.listen(8080, '10.0.2.141');