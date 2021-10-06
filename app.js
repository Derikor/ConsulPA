const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const router = require('./rutas')

//archivos CVPA
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
// rutas 
app.use('/',router);

module.exports = app