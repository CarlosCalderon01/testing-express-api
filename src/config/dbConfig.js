const { Sequelize } = require('sequelize')
const dbInfoConfig = require('./config.json')

// Configuración de entorno (development, test, production)
const env = process.env.NODE_ENV || 'development'

// Obtener la configuración específica del entorno
const { username, password, database, host, dialect } = dbInfoConfig[env]

// Crear una instancia de Sequelize usando la configuración
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
})

// Exportar la instancia de Sequelize para su uso en otros módulos
module.exports = sequelize

/*
  Bibliografia:

  - https://sequelize.org/docs/v6/getting-started/

*/
