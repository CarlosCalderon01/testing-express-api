const express = require('express')
const router = express.Router()

const controlGmtAdminViews = require('../../../controllers/GmtAdmin.js')

// link for test: http://localhost:3000/api/v1/admin/edit
router.get('/', controlGmtAdminViews.getAllGmtAdmins)
router.post('/', controlGmtAdminViews.postOneGmtAdmin)
router.get('/:id', controlGmtAdminViews.getOneGmtAdmin)
router.put('/:id', controlGmtAdminViews.putOneGmtAdmin)
router.delete('/:id', controlGmtAdminViews.deleteOneGmtAdmin)

module.exports = router
