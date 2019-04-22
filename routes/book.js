const router = require('koa-router')()

const {AddBook, findBook, updateBook, findBookById, deleteBook}  = require('../controller/bookController')

router.prefix('/api/book')
router.post('/add', AddBook)
router.post('/get', findBook)
router.post('/update', updateBook)
router.post('/getById', findBookById)
router.post('/delete', deleteBook)

module.exports = router