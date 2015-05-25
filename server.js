'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require("firebase");
var swig = require('swig');
var myFirebaseRef = new Firebase("https://kata-node-elsassjug.firebaseio.com/test1");

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(bodyParser.json());


// curl http://localhost:3000/pets

app.get('/', function(req, res) {
  myFirebaseRef.once("value", function(data) {
    res.render('index', {
      data: data.val()
    });
  });
});


app.get('/pets', function (req, res) {
  myFirebaseRef.once("value", function(data) {

    /*data.forEach(function(line) {
      console.log('LINE', line.val());
    });*/

    //console.log('DATA', data.val());
    res.status(200).json(data.val());
  });
});

// curl -H "Content-Type: application/json" -X POST http://localhost:3000/pet -d '{"name": "toto"}'

app.post('/pet', function(req, res) {

  myFirebaseRef.push(req.body, function(error) {
    if (error) {
      req.status(500).send({
        error: error
      });
    } else {
      res.status(200).send({
        status: 'ok',
        data: req.body
      });
    }
  });
});

app.listen(3000);
