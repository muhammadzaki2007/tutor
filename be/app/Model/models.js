//mulai kembali dari index models
const dbConfig = require("../Config/config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
host: dbConfig.HOST,
dialect: dbConfig.dialect,
operatorsAliases: false,
});
// membuat module 
const db = {};
// sequelize
db.Sequelize = sequelize;
db.sequelize = sequelize;
// model
db.Cv = require("./cv.model.js") (sequelize, Sequelize);

module.exports = db; 