const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const routers = require('./routes')
const fs = require('fs')
const path = require('path')
const compress = require('koa-compress')
const staticCache = require('koa-static-cache')
const isProdcut = process.env.NODE_ENV === 'production'

//加载主键 创建数据库
require('./model/ref')

// error handler
onerror(app)
// middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(koaBody({ // 文件上传中间件
  multipart: true, //是否允许上传多个
  // jsonStrict   : false,
  strict: false,
  keepExtensions: true, // 保持文件后缀
  formidable: {
    maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 跨域
app.use(async (ctx, next) => {
   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
   ctx.set('Access-Control-Allow-Origin', '*');
   ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
   ctx.set('Access-Control-Allow-Credentials', true);
   ctx.set('Access-Control-Max-Age', 3600 * 24);
   await next();
});

// routes
routers(app)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// 日志
if(isProdcut) {
    app.use(async (ctx, next) => {
      const start = new Date()
      await next()
      const ms = new Date() - start
      fs.appendFile(
        path.join(__dirname, 'logs', ctx.status < 400 ? 'access.log' : 'error.log'),
        `[${start.toLocaleString()}] ${ctx.status} ${ctx.method} ${ctx.url} - ${ms}ms\r\n`,
        (err) => {
          console.log(err)
        }
      )
    })
}
// gzip
if(isProdcut) {
  // gzip
  app.use(compress({
      filter: function (content_type) {
          return /text/i.test(content_type)
      },
      threshold: 2048,
      flush: require('zlib').Z_SYNC_FLUSH
  }))
}

// 静态缓存

if(isProdcut) {
  // 静态缓存
  app.use(staticCache(path.join(__dirname, 'public'), {
      maxAge: 365 * 24 * 60 * 60
  }))
}



module.exports = app
