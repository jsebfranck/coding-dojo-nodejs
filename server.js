'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/pets', function (req, res) {
  res.json([{
    name: 'Heidi',
    kind: 'Dog',
    age: 4
  }]);
});

// curl -H "Content-Type: application/json" -X POST http://localhost:3000/pet -d '{"name": "toto"}'

app.post('/pet', function(req, res) {
  if (!req.body || !req.body.length) {
    res.status(400).send({
      error: 'Please specify a body'
    });
  } else {
    res.status(200).send({
      status: 'ok',
      data: req.body
    });
  }
});

app.listen(3000);
