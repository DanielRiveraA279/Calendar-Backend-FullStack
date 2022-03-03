const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    //x-token headers
    const token =  req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    
    try {

        //verificamos el token
        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        //enviamos la info a la req del frontend
        req.uid = uid;
        req.name = name;

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token no valido'
        })
    }

    next();
}

module.exports = {
    validarJWT
}