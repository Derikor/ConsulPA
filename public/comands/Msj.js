const msj = require('../models/User_Message');


function getmsj (req,res){
    msj.find({},(err, products)=>{
        if (err) return req.status(500).send({message: "error al realizar la peticion"+err})
        if (!products) return req.status(404).send({message: "no existen productos"})
        res.status(200).send({ products })
    })
}

function getmsjid (req,res){
    let productid = req.params.productid
    msj.findById(productid, (err, product) =>{
        if (err) return req.status(500).send({message: "error al realizar la peticion"+err})
        if (!product) return req.status(404).send({message: "producto no existe"})
        res.status(200).send({ product })
    })
}

function savemsj (req,res){
    console.log('POST /api/product');
    console.log(req.body);
 let mensaje = new msj();
        mensaje.title = req.body.title
        mensaje.mensaje = m,
        mensaje.date = req.body.date
mensaje.save((err, mensajeStored) =>{
    if (err) res.status(500).send({message: 'error al guardar'+err})
    res.status(200).send({mensaje: mensajeStored})
});
}


function updatemsj (req,res){
    let productid = req.params.productid
    let update = req.body
    msj.findByIdAndUpdate(productid, update, (err, productupdate)=>{
        if(err) res.status(500).send({message: 'error al actualizar product'+err})

         res.status(200).send({message: productupdate})
    })
}

function deletemsj (req,res){
    let productid = req.params.productid
    msj.findById(productid, (err, product)=>{
        if(err) res.status(500).send({message: 'error al borrar'+err})
        product.remove(err =>{
            if(err) res.status(500).send({message: 'error al borrar'+err})
            res.status(200).send({message: 'mensaje eliminado'})
        })
    })
}

module.exports = {
    getmsj,
    getmsjid,
    savemsj,
    updatemsj,
    deletemsj
}