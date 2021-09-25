/*window.addEventListener('dfMessengerLoaded', function(event){
const dfMessenger = document.querySelector('df-messenger');

   dfMessenger.addEventListener('df-user-input-entered', function (event) {
    console.log("mensaje escrito:  "+ event.detail.input);
    });
});*/
//const msj = require('./public/models/User_Message');
const dfMessenger = document.querySelector('df-messenger');
/*const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());*/

dfMessenger.addEventListener('df-user-input-entered', function (event) {
    console.log('mensaje: '+ event.detail.input);
 });


 
