const express = require('express')
const app = express()

function checkingListenPort (PORT) {
  const result = app.listen(PORT, console.log(`Server Start in http://localhost:${PORT}`))
  return result
}

module.exports = { checkingListenPort }
