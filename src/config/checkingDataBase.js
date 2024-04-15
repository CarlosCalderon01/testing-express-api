const sequelize = require('../config/dbConfig.cjs')

async function testSynchronizing () {
  sequelize.sync()
    .then(() => {
      console.log('Synchronizing model with the database')
    })
    .catch((error) => {
      console.error('Model synchronization error', error)
    })
}

async function testAuthenticate () {
  try {
    await sequelize.authenticate()
    console.log('All Good!')
  } catch (err) {
    console.error('All Bad!', err)
  }
}

module.exports = { testSynchronizing, testAuthenticate }
