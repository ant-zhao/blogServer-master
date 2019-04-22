const router = require('koa-router')()

const {AddMusic, findMusic, updateMusic, findMusicById, deleteMusic}  = require('../controller/musicController')

router.prefix('/api/music')
router.post('/add', AddMusic)
router.post('/get', findMusic)
router.post('/update', updateMusic)
router.post('/getById', findMusicById)
router.post('/delete', deleteMusic)

module.exports = router