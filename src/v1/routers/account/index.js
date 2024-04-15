const express = require('express')
const router = express.Router()
const editBmtAccount = require('./viwesBmtAccount.js')

router.route('/').get((req, res) => {
  // link for test: http://localhost:3000/api/v1/account
  res.send(`<h1> estas en ${req.baseUrl}</h1>`)
})

router.use('/edit', editBmtAccount)

module.exports = router

/*

  Notes:

  - Aqui debe empezar la app, creado cuenta y empezando el proyecto

*/
