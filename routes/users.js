const router = require('koa-router')()
const {Register, Login} = require('../controller/userController')

router.prefix('/api/users')

router.post('/register', Register)
router.post('/login', Login)


module.exports = router
