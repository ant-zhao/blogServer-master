const router = require('koa-router')()

const {AddHotSwiper, findHotSwiper, updateHotSwiper, findHotSwiperById, deleteHotSwiper}  = require('../controller/hotSwipercontroller')

router.prefix('/api/hotSwiper')
router.post('/add', AddHotSwiper)
router.post('/get', findHotSwiper)
router.post('/update', updateHotSwiper)
router.post('/getById', findHotSwiperById)
router.post('/delete', deleteHotSwiper)

module.exports = router