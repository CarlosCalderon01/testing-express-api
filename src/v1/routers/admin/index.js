const express = require('express')
// const { DatabaseError } = require('pg')
const router = express.Router()

const editGmtAdmins = require('./GmtAdminViews.js')

router.route('/').get((req, res) => {
  // link for test: http://localhost:3000/api/v1/admin
  res.send(`<h1> estas en ${req.baseUrl}</h1>`)
})

router.use('/edit', editGmtAdmins)

module.exports = router

/*

  Notes:

  - Aqui debe empezar la app, creado cuenta y empezando el proyecto

*/
