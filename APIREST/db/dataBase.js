const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('test', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;

module.exports = db;
