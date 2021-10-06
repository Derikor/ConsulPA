
const mongoose = require('mongoose');
const app = require('./app');
//puertos
app.set('port', process.env.PORT || 3000);

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




