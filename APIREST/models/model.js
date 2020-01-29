const Sequelize = require('sequelize');

const db = require('../db/dataBase');

module.exports = db.sequelize.define("ubicaciones", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    latitud: Sequelize.STRING,
    longitud: Sequelize.STRING,
    fecha: Sequelize.TIME
});