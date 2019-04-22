/**
 * 公用接口
 */

const router = require('koa-router')()
const { UpFiles, UpFilesMP3 }  = require('../controller/commonController')


router.post('/api/upFiles', UpFiles)
router.post('/api/upFilesMP3', UpFilesMP3)



module.exports = router