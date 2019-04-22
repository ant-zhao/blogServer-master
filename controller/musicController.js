

const { Music } = require('../model/ref')


let AddMusic = async(ctx, next) => {
    let body = ctx.request.body
    let musicData = await Music.create(body)
    ctx.body = {
        code: 200,
        message: '~~ music 添加成功！！！',
        data: musicData
    }
}

let findMusic = async(ctx, next) =>{
    let body = ctx.request.body
    let musicData = await Music.findAndCountAll()
    ctx.body = {
        code: 200,
        message: '~~ music 查询成功！！',
        data: musicData
    }
}
let findMusicById = async(ctx, next) =>{
    let body = ctx.request.body
    let musicData = await Music.findOne(
        {
            where: {
                musicId: body.musicId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ music 查询详情成功！！',
        data: musicData
    }
}


let updateMusic = async(ctx, next) => {
    let body = ctx.request.body
    let musicData = await Music.update(
        body,
        {
            where: {
                musicId: body.musicId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ music 更新成功！！',
        data: musicData
    }
}


let deleteMusic = async(ctx, next) => {
    let body = ctx.request.body
    let musicData = await Music.destroy(
        {
            where: {
                musicId: body.musicId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ music 删除成功！！',
        data: musicData
    }
}

exports.AddMusic = AddMusic
exports.findMusic = findMusic
exports.findMusicById = findMusicById
exports.updateMusic = updateMusic
exports.deleteMusic = deleteMusic



