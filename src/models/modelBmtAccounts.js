const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/dbConfig')

class BmtAccount extends Model {}

BmtAccount.init({
  nickName: DataTypes.STRING,
  email: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'BmtAccount'
})

module.exports = BmtAccount

/*

  Developer's Notes:

  - Se crea el modelo a travez de la herramienta sequelize-cli se presentan conflictos en este primer intento.
  - se presenta este modelo generado por chatGPT y se guarda el modelo por sequelize-cli

*/

// GENERATE MODEL BY SEQUELIZE-CLI

// 'use strict'
// const { Model } = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//   class BmtAccounts extends Model {
//     static associate (models) { }
//   }
//   BmtAccounts.init({
//     nickName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     birthdate: DataTypes.DATE,
//     password: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'BmtAccounts'
//   })
//   return BmtAccounts
// }
