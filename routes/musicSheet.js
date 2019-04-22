const router = require('koa-router')()

const {AddSheet, findSheet, updateSheet, findSheetById, deleteSheet}  = require('../controller/musicSheetController')

router.prefix('/api/sheet')
router.post('/add', AddSheet)
router.post('/get', findSheet)
router.post('/update', updateSheet)
router.post('/getById', findSheetById)
router.post('/delete', deleteSheet)

module.exports = router