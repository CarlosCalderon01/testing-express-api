'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BmtStatu extends Model {
    static associate (models) {
    }
  }
  BmtStatu.init({
    nickName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BmtStatu',
    tableName: 'BmtStatus'
  })
  return BmtStatu
}
