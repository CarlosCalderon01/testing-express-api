const express = require('express')
const router = express.Router()

const controllBmtStatus = require('../../../controllers/controlBmtStatus.js')

router.get('/', controllBmtStatus.getAllBmtStatu)
router.post('/', controllBmtStatus.postBmtStatu)
router.get('/:id', controllBmtStatus.getOneBmtStatu)
router.put('/:id', controllBmtStatus.putBmtStatu)
router.delete('/:id', controllBmtStatus.deleteBmtStatu)

module.exports = router

// router.route('/').get((req, res) => {
//   // link for test: http://localhost:3000/api/v1/masterTable
//   res.send(`<h1> estas en ${req.baseUrl}</h1>`)
// })

// link for test: http://localhost:3000/api/v1/admin/edit