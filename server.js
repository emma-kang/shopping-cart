/**
 * Shopping Cart 
 * Name: Yuseon Kang
 * Date: 2019-01-19
 */

 'use strict';

var HTTP_PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var Products = require('./models/products');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kh0626:alclsajdrn0626@ds161794.mlab.com:61794/ecommerce', { useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// importing route 
var routers = require('./routes/pdRoutes');

// module providing Connect/Express middleware
var cors = require('cors'); 

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(cors());

routers(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(HTTP_PORT, () => {
    console.log("app listening on: " + HTTP_PORT);
});

