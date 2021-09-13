
const mongoose = require('mongoose');
const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000);

//archivos CVPA
app.use(express.static(__dirname + "/public/"));

 mongoose.connect(
    'mongodb+srv://CVPA:DERIKOR123@primauxcluster.7o9dl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ,(err,res)=> {
        if  (err) return console.log("Se produjo un error en la conexion de BD", err);
        console.log("Base de Datos conexionada");
    }
);


//Epezando en el servidor
app.listen(app.get('port'), () =>{
    console.log("servidor web iniciado en el puerto.", app.get('port'));
})




