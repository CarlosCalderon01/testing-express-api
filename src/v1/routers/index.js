const express = require('express')
const router = express.Router()

const accountRouter = require('./account/index.js')
const adminRouter = require('./admin/index.js')
const masterTableRouter = require('./masterTable/index.js')

router.route('/').get((req, res) => {
  // link for test: http://localhost:3000/api/v1
  res.send(`<h1>estás en ${req.baseUrl}</h1>`)
})

router.use('/admin', adminRouter)
router.use('/account', accountRouter)
router.use('/mastertable', masterTableRouter)

module.exports = router
