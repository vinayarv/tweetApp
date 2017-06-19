'use strict'
const express = require('express');
const app = express(); //creates an application instane
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use('/', routes);

/*
For every incoming request:

Use request.path to get the route
See if that route maps to a valid file in the public directory
If not, go defer to the next matching middleware
If the file matches, send over its contents
*/
app.use(express.static('public'))
/* Nunjucks: Templating engine that renders the html documents based on templates : https://mozilla.github.io/nunjucks/templating.html
Nunjucks independently.
*/
// var locals = {
//   "title" : "Tweet App",
//   "people" : [
//     {name: "Vinaya"},
//     {name: "Karina"},
//     {name: "Svitlana"}]
// };
// var env = nunjucks.configure('views', {noCache: true});
// env.render('index.html', locals, function(err, output){
//     if(err) console.error(err);
//     console.log(output);
// });

// Logger for all requests
// app.use(function(req, res, next){
//   console.log(req.method, req.originalUrl);
//   next();
// });

// app.use('/special', function(req, res, next){
//   console.log(req.method, req.originalUrl, "You reached special area!");
//   next();
// });

/* Integrating Nunjucks with Express*/
//have res.render work with html files
app.set('view engine', 'html');
//When giving res.render html files, tell it to use nunjucks.render
app.engine('html', nunjucks.render);
//point nunjucks to point to a directory that has templates.
nunjucks.configure('views', {noCache: true});

//Logger using express library
app.use(morgan('dev'))

//request and respond is a cycle. So cannot write res.send twice.
// app.get('/', function(req, res, next){
//   console.log(res.statusCode);
//   //res.send("Welcome here!!");
//   //To test app set with nunjucks render
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

// Server listening at port 3000 for incoming requests
app.listen(3000, function(){
  console.log("server listening");
});


