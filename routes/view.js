/**
 * 静态页面  ejs
 */

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'youthUp blog Server'
    })
})
module.exports = router
  