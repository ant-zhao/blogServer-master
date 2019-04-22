

const { Book } = require('../model/ref')


let AddBook = async(ctx, next) => {
    let body = ctx.request.body
    let bookData = await Book.create(body)
    ctx.body = {
        code: 200,
        message: '~~ book 添加成功！！！',
        data: bookData
    }
}

let findBook = async(ctx, next) =>{
    let body = ctx.request.body
    let bookData = await Book.findAndCountAll()
    ctx.body = {
        code: 200,
        message: '~~ book 查询成功！！',
        data: bookData
    }
}
let findBookById = async(ctx, next) =>{
    let body = ctx.request.body
    let bookData = await Book.findOne(
        {
            where: {
                bookId: body.bookId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ book 查询详情成功！！',
        data: bookData
    }
}


let updateBook = async(ctx, next) => {
    let body = ctx.request.body
    let bookData = await Book.update(
        body,
        {
            where: {
                bookId: body.bookId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ book 更新成功！！',
        data: bookData
    }
}


let deleteBook = async(ctx, next) => {
    let body = ctx.request.body
    let bookData = await Book.destroy(
        {
            where: {
                bookId: body.bookId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ book 删除成功！！',
        data: bookData
    }
}

exports.AddBook = AddBook
exports.findBook = findBook
exports.findBookById = findBookById
exports.updateBook = updateBook
exports.deleteBook = deleteBook



