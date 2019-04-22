const router = require('koa-router')()

const {AddBlogType, findBlogType, updateBlogType, findBlogTypeById, deleteBlogType}  = require('../controller/blogTypeController')

router.prefix('/api/blogType')
router.post('/add', AddBlogType)
router.post('/get', findBlogType)
router.post('/update', updateBlogType)
router.post('/getById', findBlogTypeById)
router.post('/delete', deleteBlogType)



module.exports  = router
