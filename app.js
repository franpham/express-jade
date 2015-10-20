"use strict";

var users = require('./routes/users');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

// specify a directory to use for requests for static files;
app.use(express.static('public'));    // files in /public are used for 'GET' requests;

// delegate '/users' route to users' router;
app.use('/users', users);

// use() method calls should be before router methods (get, put, etc);

app.get(['/'], function(req, res) {
  res.render('index', { emails: ['me1@me.com', 'me2@me.com', 'me3@me.com'] });
});

// app.get('/fix', function(req, res) {   // use this fix if browser is redirecting '/' to '/public';
//   res.redirect('/');
// });

// listen on port 3000 for development since browser is already using port 80;
var server = app.listen(3000, function() {
  var host = server.address().adress;
  var port = server.address().port;

  console.log('Listening at http://%s:%s ', host, port);
});

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
