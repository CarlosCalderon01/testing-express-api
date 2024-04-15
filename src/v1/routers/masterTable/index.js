const express = require('express')
const router = express.Router()
const editBmtStatu = require('./BmtStatusViews.js')

router.route('/').get((req, res) => {
  // link for test: http://localhost:3000/api/v1/masterTable
  res.send(`<h1> estas en ${req.baseUrl}</h1>`)
})

router.use('/edit', editBmtStatu)

module.exports = router

/*

  Notes:

  - Aqui debe empezar la app, creado cuenta y empezando el proyecto

*/
