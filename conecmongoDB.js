const mongoose = require('mongoose');

await mongoose.connect(
    'mongodb+srv://CVPA:<DERIKOR123>@primauxcluster.7o9dl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    {

    },(err,res)=> {
        if  (err) return console.log("Se produjo un error en la conexion de BD", err);
        console.log("Base de Datos conexionada");
    }
);