
const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    //manejo de errores en la req que envia el frontend, si hay error retorna el status 400
    const errros = validationResult(req);
    if (!errros.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errros: errros.mapped() //mensaje que le pusimos en routes
        })
    }

    //siguiente liena de codigo
    next();
}


module.exports = {
    validarCampos
}