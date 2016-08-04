var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/params/:name', function (req, res) {
    res.send(req.params.name);
});

app.get('/query', function (req, res) {
    res.send(req.query.name);
});

app.post('/body', function (req, res) {
    res.send(req.body.name);
});

app.post('/header', function (req, res) {
    res.send(req.get('name'));
});

app.listen(3000);
module.exports = app;
