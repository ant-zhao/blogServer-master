

const { HotSwiper } = require('../model/ref')


let AddHotSwiper = async(ctx, next) => {
    let body = ctx.request.body
    let hotSwiperData = await HotSwiper.create(body)
    ctx.body = {
        code: 200,
        message: '~~ hotSwiper 添加成功！！！',
        data: hotSwiperData
    }
}

let findHotSwiper = async(ctx, next) =>{
    let body = ctx.request.body
    let hotSwiperData = await HotSwiper.findAndCountAll()
    ctx.body = {    
        code: 200,
        message: '~~ hotSwiper 查询成功！！',
        data: hotSwiperData
    }
}
let findHotSwiperById = async(ctx, next) =>{
    let body = ctx.request.body
    let hotSwiperData = await HotSwiper.findOne(
        {
            where: {
                hotId: body.hotId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ hotSwiper 查询详情成功！！',
        data: hotSwiperData
    }
}


let updateHotSwiper = async(ctx, next) => {
    let body = ctx.request.body
    let hotSwiperData = await HotSwiper.update(
        body,
        {
            where: {
                hotId: body.hotId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ hotSwiper 更新成功！！',
        data: hotSwiperData
    }
}


let deleteHotSwiper = async(ctx, next) => {
    let body = ctx.request.body
    let hotSwiperData = await HotSwiper.destroy(
        {
            where: {
                hotId: body.hotId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ hotSwiper 删除成功！！',
        data: hotSwiperData
    }
}

exports.AddHotSwiper = AddHotSwiper
exports.findHotSwiper = findHotSwiper
exports.findHotSwiperById = findHotSwiperById
exports.updateHotSwiper = updateHotSwiper
exports.deleteHotSwiper = deleteHotSwiper



