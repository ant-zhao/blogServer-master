const router = require('koa-router')()

const {AddBanner, findBanner, updateBanner, findBannerById, deleteBanner}  = require('../controller/bannerController')

router.prefix('/api/banner')
router.post('/add', AddBanner)
router.post('/get', findBanner)
router.post('/update', updateBanner)
router.post('/getById', findBannerById)
router.post('/delete', deleteBanner)



module.exports  = router
