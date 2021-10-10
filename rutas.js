const express = require('express');
const mjscomands = require('./public/comands/Msj')
const reg = require('./public/models/horario_especialidad')
const router = express.Router();

// rutas 
router.get('/reportper', async (req, res)=>{
    const regis = await reg.find();
    res.render('reporpers',{
        regis:regis
    });
});
router.post('/add', async (req, res)=>{
    const regis = new reg(req.body);
    await regis.save();
    res.redirect('/reportper');
});
router.get('/modificar/:id', async (req, res)=>{
    const { id } = req.params;
    const regis = await reg.findById(id);
    res.render('regisperso',{
        regis
    });
});
router.post('/modif/:id', async (req, res)=>{
    const { id } = req.params;
    await reg.update({_id: id}, req.body);
    res.redirect('/reportper');
});
router.get('/eliminar/:id', async (req, res)=>{
    const { id } = req.params;
    await reg.remove({_id: id});
    res.redirect('/reportper');
});
router.get('/chat', (req, res)=>{
    res.render('asistente');
});
router.post('/addmen', async (req, res)=>{
    var mensaje = $('#salida').val();
    const savmen = new reg();
    savmen.title = 'mensaje de usuario'
    savmen.mensaje = mensaje
    await savmen.save();
    console.log('mensaje guardado');
});


router.get('/product', mjscomands.getmsj)

router.get('/product/:productid', mjscomands.getmsjid)

router.post('/product', mjscomands.savemsj)

router.put('/product/:productid', mjscomands.updatemsj)

router.delete('/product/:productid', mjscomands.deletemsj)

module.exports = router