

const { BlogType } = require('../model/ref')


let AddBlogType = async(ctx, next) => {
    let body = ctx.request.body
    let BlogTypeData = await BlogType.create(body)
    ctx.body = {
        code: 200,
        message: '~~ BlogType 添加成功！！！',
        data: BlogTypeData
    }
}

let findBlogType = async(ctx, next) =>{
    let body = ctx.request.body
    let BlogTypeData = await BlogType.findAndCountAll()
    ctx.body = {
        code: 200,
        message: '~~ BlogType 查询成功！！',
        data: BlogTypeData
    }
}
let findBlogTypeById = async(ctx, next) =>{
    let body = ctx.request.body
    let BlogTypeData = await BlogType.findOne(
        {
            where: {
                blogTypeId: body.blogTypeId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ BlogType 查询详情成功！！',
        data: BlogTypeData
    }
}


let updateBlogType = async(ctx, next) => {
    let body = ctx.request.body
    let BlogTypeData = await BlogType.update(
        body,
        {
            where: {
                blogTypeId: body.blogTypeId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ BlogType 更新成功！！',
        data: BlogTypeData
    }
}


let deleteBlogType = async(ctx, next) => {
    let body = ctx.request.body
    let BlogTypeData = await BlogType.destroy(
        {
            where: {
                blogTypeId: body.blogTypeId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ BlogType 删除成功！！',
        data: BlogTypeData
    }
}

exports.AddBlogType = AddBlogType
exports.findBlogType = findBlogType
exports.findBlogTypeById = findBlogTypeById
exports.updateBlogType = updateBlogType
exports.deleteBlogType = deleteBlogType



