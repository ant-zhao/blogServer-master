
const fs = require('fs')
const path = require('path')
const{imgHttp} = require('../config')


let UpFiles =  async(ctx, next) => {
    let fileData = ctx.request.files.file
    let reader = fs.createReadStream(fileData.path)
    let name = `${Date.now()}-blog-img.${fileData.name.split('.').pop()}`
    // 创建可写流
    let savePath = path.join(__dirname, `../public/upload/${name}`);
    console.log(name)
    let upStream = fs.createWriteStream(savePath);
    reader.pipe(upStream);
    ctx.body = {
        code: 200,
        message: '~~~ 上传图片终于成功了！！ ε=(´ο｀*)))唉',
        data: {
            url: `${imgHttp}/upload/${name}`
        }
    }
}

let UpFilesMP3 =  async(ctx, next) => {
    let fileData = ctx.request.files.file
    let reader = fs.createReadStream(fileData.path)
    let name = `${Date.now()}-blog-mp3.${fileData.name.split('.').pop()}`
    // 创建可写流
    let savePath = path.join(__dirname, `../public/uploadMp3/${name}`);
    let upStream = fs.createWriteStream(savePath);
    reader.pipe(upStream);
    ctx.body = {
        code: 200,
        message: '~~~ 上传MP3终于成功了！！ ε=(´ο｀*)))唉',
        data: {
            url: `${imgHttp}/upload/${name}`
        }
    }
}


exports.UpFiles =UpFiles
exports.UpFilesMP3 =UpFilesMP3


