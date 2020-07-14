/* jshint esversion: 6 */
var express = require('express');

var app =express();

var port = process.env.PORT || 3000;

app.get('/', (req, resp) =>{
    resp.send('Welcome to my API!');
});

app.listen(port, ()=>{
console.log('Running on port ' + port);
});