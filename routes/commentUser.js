const router = require('koa-router')()

const { UserLogin, UserRegister, UserBasicChange, UserBasicPassword }  = require('../controller/commentUserController')

router.prefix('/api/commnetUser')
router.post('/userLogin', UserLogin)
router.post('/userRegister', UserRegister)
router.post('/userBasicChange', UserBasicChange)
router.post('/userBasicPassword', UserBasicPassword)




module.exports  = router