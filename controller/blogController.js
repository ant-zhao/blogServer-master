const { Blog } = require('../model/ref')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

let AddBlog = async(ctx, next) => {
    let body = ctx.request.body
    let BlogData = await Blog.create(body)
    ctx.body = {
        code: 200,
        message: '~~ Blog 添加成功！！！',
        data: BlogData
    }
}

let findBlog = async(ctx, next) =>{
    let body = ctx.request.body
    let { pageSize=10, pageNumber=1 } = body
    
    let BlogData = await Blog.findAndCountAll(
        {
            include:['blog_type'],
            order: [
                ["created_time",'DESC'],
            ],
            offset: pageSize * ( pageNumber-1 ), // 跳过多少条
            limit: pageSize
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 查询成功！！',
        data: BlogData
    }
}
let findBlogById = async(ctx, next) =>{
    let body = ctx.request.body
    let BlogData = await Blog.findOne(
        {
            where: {
                blogId: body.blogId
            },
            // attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 查询详情成功！！',
        data: BlogData
    }
}

let findBlogByBlogType = async(ctx, next) =>{
    let body = ctx.request.body
    let { blogTypeId, pageSize, pageNumber } = body
    let BlogData = await Blog.findAndCountAll(
        {
            where: {
                blog_type_id: blogTypeId
            },
            include:['blog_type'],
            offset: pageSize * ( pageNumber-1 ), // 跳过多少条
            limit: pageSize
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 查询详情成功！！',
        data: BlogData
    }
}


let updateBlog = async(ctx, next) => {
    let body = ctx.request.body
    let BlogData = await Blog.update(
        body,
        {
            where: {
                blogId: body.blogId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 更新成功！！',
        data: BlogData
    }
}


let deleteBlog = async(ctx, next) => {
    let body = ctx.request.body
    let BlogData = await Blog.destroy(
        {
            where: {
                blogId: body.blogId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 删除成功！！',
        data: BlogData
    }
}

let findBlogSearch = async(ctx, next) => {
    let body = ctx.request.body
    let BlogData = await Blog.findAll(
        {
            where: {
                blogTitle: {
                    [Op.like]: `%${body.searchStr}%`
                },
                blogDes: {
                    [Op.like]: `%${body.searchStr}%`
                }
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 模糊查询成功！！',
        data: BlogData
    }
}

let addBlogHot = async(ctx, next) =>{
    let body = ctx.request.body
    let BlogData = await Blog.findOne(
        {
            where: {
                blogId: body.blogId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    let { blogHot } = BlogData
    let _blogHot = blogHot +1
    let BlogUpdateData = await Blog.update(
        {blogHot: _blogHot},
        {
            where: {
                blogId: body.blogId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 增加热度成功！！',
        data: BlogUpdateData
    }
}

let addBlogLike = async(ctx, next) =>{
    let body = ctx.request.body
    let BlogData = await Blog.findOne(
        {
            where: {
                blogId: body.blogId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    let { blogLikes } = BlogData
    let _blogLikes = blogLikes +1
    let BlogUpdateData = await Blog.update(
        {blogLikes: _blogLikes},
        {
            where: {
                blogId: body.blogId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ Blog 增加喜歡成功！！',
        data: BlogUpdateData
    }
}

exports.AddBlog = AddBlog
exports.findBlog = findBlog
exports.findBlogById = findBlogById
exports.findBlogByBlogType = findBlogByBlogType
exports.updateBlog = updateBlog
exports.deleteBlog = deleteBlog
exports.findBlogSearch = findBlogSearch
exports.addBlogHot = addBlogHot
exports.addBlogLike = addBlogLike












