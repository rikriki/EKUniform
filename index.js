var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 2595;
    var path = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var favicon = require('serve-favicon');    
 
var app = express();

var bookings = [];


/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
*/
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser());                         // pull information from html in POST
app.use(methodOverride());        
//app.use(require('json-middleware').middleware());  




app.set("view options", {
    layout: false
});


app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('public/index.html');
});
 
app.post('/book', function (req, res) {
    var data ={
    	'qty':req.body.noTickets,
    	'date':req.body.date,
    	'id':req.body.movie_id,
    	'name':req.body.name
    }
    console.log(req.body.noTickets + "")
    res.json(data);
    bookings.push(data);
});


app.get('/movies',function(req,res){
	 movies= require('./data/movies.json');
 	res.json(movies)
 })

app.get('/bookings',function(req,res){
 //   console.log(bookings[1].name + "Riki")
     //og(bookings[1].name + "Hello, world!");
    res.json(bookings)
 })

app.post('/editBook',function(req,res){
    var idx = req.body.index;
    
        for(i=0;i<bookings.length;i++){
             console.log(bookings.length + "length " + i);
            if(i==idx){
                console.log(bookings[i].name + "name");
                bookings[i].name =req.body.name;
            }   
        }
    res.statusCode = 300;
    res.send('Success');
});
app.listen(port);
console.log('Express server running at http://localhost:' + port);


