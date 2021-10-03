//window.addEventListener('dfMessengerLoaded', function(event){
const dfMessenger = document.querySelector('df-messenger');
//const msj = require('../models/User_Message');
   dfMessenger.addEventListener('df-user-input-entered', function mrecibido(event) {
       var men = event.input;

       savemensaje(men);
       
    console.log("mensaje escrito:  "+ men);
    });
    function savemensaje(men){
        let mensaje = new msj({
            title: "",
            mensaje: men,
        });
        mensaje.save((err, res) => {
            if (err) return console.log(err);
            console.log("Se creo un usuario:", res);
          });
       }
//});

/*const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('df-user-input-entered', function  (event) {
    var mens = event.detail.input;
    document.getElementById("mensa").value = mens;
 });
const bodyParser = require('body-parser');
const express = require('express');
const msj = require('../models/User_Message');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.post('df-user-input-entered',(req,res)=>{
    let mensaje = new msj();
        mensaje.title = ""
        mensaje.mensaje = req.input
        mensaje.save((err, mensajeStored) =>{
            if (err) res.status(500).send({message: 'error al guardar'+err})
            res.status(200).send({mensaje: mensajeStored})
        });
})*/
