// Modelo original generado por Sequelize-CLI

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')

class GmtAdmin extends Model {}

GmtAdmin.init({
  nickName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'GmtAdmin',
  tableName: 'GmtAdmins'
})

module.exports = GmtAdmin
