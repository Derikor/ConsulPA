
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const msj = require('./public/models/User_Message');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutas
app.get('/api/product', (req,res) =>{
    res.send(200, {products: []})
})

app.get('/api/product/:productid', (req,res) =>{
    
})


app.post('/api/product', (req,res) =>{
    console.log('POST /api/product');
    console.log(req.body);
 let mensaje = new msj();
        mensaje.title = req.body.title
        mensaje.mensaje = req.body.mensaje
mensaje.save((err, mensajeStored) =>{
    if (err) res.status(500).send({message: 'error al guardar'+err})
    res.status(200).send({mensaje: mensajeStored})
});
})

app.put('/api/product/:productid', (req,res) =>{

})

app.delete('/api/product/:productid', (req,res) =>{

})

//puertos
app.set('port', process.env.PORT || 3000);

//archivos CVPA
app.use(express.static(__dirname + "/public/"));

//Base de datos CVPA
 mongoose.connect(
    'mongodb+srv://CVPA:DERIKOR123@primauxcluster.7o9dl.mongodb.net/CVPA_BD?retryWrites=true&w=majority'
    ,(err,res)=> {
        if  (err) return console.log("Se produjo un error en la conexion de BD", err);
        console.log("Base de Datos conexionada");

    }
);

//Empezando en el servidor
app.listen(app.get('port'), () =>{
    console.log("servidor web iniciado en el puerto.", app.get('port'));
})




