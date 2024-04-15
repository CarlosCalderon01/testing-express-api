const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/dbConfig')
const v1Router = require('./v1/routers/index.js')

const PORT = process.env.PORT || 3000

async function startServer () {
  try {
    await sequelize.sync() // Sincronizar modelos con la base de datos
    // console.log('Modelos sincronizados con la base de datos')
    // Iniciar el servidor una vez que los modelos estén sincronizados
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`)
    })
  } catch (error) {
    // console.error('Error al sincronizar modelos con la base de datos:', error)
  }
}

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!')
})

app.use(bodyParser.json())
app.use('/api/v1/', v1Router)

startServer()

/*
  Apuntes:

  - Notas:

  const viewsBmtAccounts = require('./views/viwesBmtAccount')

*/
