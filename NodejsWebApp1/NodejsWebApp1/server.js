'use strict';
var http = require('http');
var url = require('url')

var cities = require('cities');
var dt = require('./myfirstmodule');
var fs = require('fs');

var port = process.env.PORT || 1337;


const app = http.createServer((req, res) => {

    var city, query;
    query = url.parse(req.url, true).query;
    if (query.zipCode) city = cities.zip_lookup(query.zipCode).city;
    else city = "not found"

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>The city you are in is ${city}.</h1><br />`);
    res.write('<h1>The city you are in is ' + city + '.</h1>');
    res.write("The date and time are currently: " + dt.myDateTime());

    res.end();

    console.log('hit - ' + req.url)
});

app.listen(8080,'10.0.2.141');