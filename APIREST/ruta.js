const express = require('express');

const router = express.Router();

const Ubicacion = require('./models/model');

router.get('/ubicacion', (req, res, next) => {
    const { query } = req;
    Ubicacion.findAll({ where: query })
        .then((books) => {
            res.json(books);
        })
        .catch((err) => {
            res.send(`error: ${err}`);
        });
});

router.post('/ubicacion', (req, res, next) => {
    const datos = {
        user_name:req.body.user_name,
        longitud: req.body.longitud,
        latitud: req.body.latitud,
        fecha: req.body.fecha,
    };

    if (!datos) {
        res.status(400);
        res,
        json({
            error: 'Datos incorrectos'
        });
    } else {
        Ubicacion.create(datos)
            .then((data) => {
                return res.status(200).json({
                    ok:true,
                    datos:data
                });
            })
            .catch((err) => {
                res.json(`error: ${err}`);
            });
    }
});

module.exports = router;