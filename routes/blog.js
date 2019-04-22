const router = require('koa-router')()

const {AddBlog, findBlog, updateBlog, findBlogById, deleteBlog, findBlogByBlogType, findBlogSearch, addBlogHot, addBlogLike}  = require('../controller/blogController')

router.prefix('/api/Blog')
router.post('/add', AddBlog)
router.post('/get', findBlog)
router.post('/update', updateBlog)
router.post('/getById', findBlogById)
router.post('/getByBlogType', findBlogByBlogType)
router.post('/findBlogSearch', findBlogSearch)
router.post('/delete', deleteBlog)
router.post('/addBlogHot', addBlogHot)
router.post('/addBlogLike', addBlogLike)



module.exports  = router
