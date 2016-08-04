
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/params/:name',function(req,res){
    res.send(req.params.name);
})
app.listen(3000);
module.exports = app;
