

const { MusicSheet } = require('../model/ref')


let AddSheet = async(ctx, next) => {
    let body = ctx.request.body
    let sheetData = await MusicSheet.create(body)
    ctx.body = {
        code: 200,
        message: '~~ sheet 添加成功！！！',
        data: sheetData
    }
}

let findSheet = async(ctx, next) =>{
    let body = ctx.request.body
    let sheetData = await MusicSheet.findAndCountAll()
    ctx.body = {
        code: 200,
        message: '~~ sheet 查询成功！！',
        data: sheetData
    }
}
let findSheetById = async(ctx, next) =>{
    let body = ctx.request.body
    let sheetData = await MusicSheet.findOne(
        {
            where: {
                sheetId: body.sheetId
            },
            attributes: { exclude: ['updated_time', 'created_time'] }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ sheet 查询详情成功！！',
        data: sheetData
    }
}


let updateSheet = async(ctx, next) => {
    let body = ctx.request.body
    let sheetData = await MusicSheet.update(
        body,
        {
            where: {
                sheetId: body.sheetId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ sheet 更新成功！！',
        data: sheetData
    }
}


let deleteSheet = async(ctx, next) => {
    let body = ctx.request.body
    let sheetData = await MusicSheet.destroy(
        {
            where: {
                sheetId: body.sheetId
            }
        }
    )
    ctx.body = {
        code: 200,
        message: '~~ sheet 删除成功！！',
        data: sheetData
    }
}

exports.AddSheet = AddSheet
exports.findSheet = findSheet
exports.findSheetById = findSheetById
exports.updateSheet = updateSheet
exports.deleteSheet = deleteSheet



