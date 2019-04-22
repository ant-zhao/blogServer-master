

const { Banner } = require('../model/ref')


let AddBanner = async(ctx, next) => {
    let body = ctx.request.body
    let bannerData = await Banner.create(body)
    ctx.body = {
        code: 200,
        message: '~~ banner 添加成功！！！',
        data: bannerData
    }
}

let findBanner = async(ctx, next) =>{
    let body = ctx.request.body
    let bannerData = await Banner.findAndCountAll()
    ctx.body = {
        code: 200,
        message: '~~ banner 查询成功！！',
        data: bannerData
    }
}
let findBannerById = async(ctx, next) =>{
    let body = ctx.request.body
    let bannerData = await Banner.findOne(
        {
            where: {
                bannerId: body.bannerId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ banner 查询详情成功！！',
        data: bannerData
    }
}


let updateBanner = async(ctx, next) => {
    let body = ctx.request.body
    let bannerData = await Banner.update(
        body,
        {
            where: {
                bannerId: body.bannerId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ banner 更新成功！！',
        data: bannerData
    }
}


let deleteBanner = async(ctx, next) => {
    let body = ctx.request.body
    let bannerData = await Banner.destroy(
        {
            where: {
                bannerId: body.bannerId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ banner 删除成功！！',
        data: bannerData
    }
}

exports.AddBanner = AddBanner
exports.findBanner = findBanner
exports.findBannerById = findBannerById
exports.updateBanner = updateBanner
exports.deleteBanner = deleteBanner



