const Md5 = require('md5') 

const { CommentUser }  = require('../model/ref')

let UserRegister = async(ctx, next) => {
    let {commentUserImg, commentUserEmail, commentUserName, commentUserPassword} = ctx.request.body
    let rp = await CommentUser.findOrCreate({
        where: {commentUserEmail: commentUserEmail},
        defaults: {commentUserImg, commentUserEmail, commentUserName, commentUserPassword:Md5(commentUserPassword)},
        attributes: { exclude: ['commentUserPassword', 'created_time', 'updated_time']}
    }).spread((res, created) => {
       if(created){
            _body = {
                code: 200,
                message: '用户注册成功',
                data: res
            }
       }else{
            _body = {
                code: 100,
                message: '用户已存在',
                data: res
            }
       }
    })
    ctx.body = _body
}

let UserLogin = async(ctx, next) => {
    let {commentUserEmail, commentUserPassword} = ctx.request.body
    let data = await CommentUser.findOne(
        {
            where:{commentUserEmail, commentUserPassword:Md5(commentUserPassword) },
            attributes: { exclude: ['commentUserPassword', 'created_time', 'created_time']}
        }
    )
    if(data){
        ctx.body =  {
            code: 200,
            message: '登录成功',
            data: data
        }
    }else{
        ctx.body =  {
            code: 100,
            message: '用户名和密码不匹配'
        }
    }
   
}


let UserBasicChange = async(ctx, next) => {
    let {commentUserImg, commentUserEmail, commentUserPassword, commentUserName} = ctx.request.body
    let findData = await CommentUser.findOne({
        where: {  
            commentUserEmail,
            commentUserPassword: Md5(commentUserPassword)
        },
        attributes: { exclude: ['commentUserPassword', 'created_time', 'created_time']}
    })
    if(findData){
        let params =  {commentUserImg, commentUserName}
        let data = await CommentUser.update(
            params,
            {
                where: {commentUserEmail},
                attributes: { exclude: ['commentUserPassword', 'created_time', 'created_time']}
            }
        )
        findData.commentUserImg = commentUserImg
        findData.commentUserName = commentUserName
        ctx.body =  {
            code: 200,
            message: '修改用户信息成功',
            data: findData
        }
    }else{
        ctx.body =  {
            code: 100,
            message: '账号密码不匹配',
        }
    }
    
}

let UserBasicPassword = async(ctx, next) => {
    let {commentUserEmail, commentUserPassword, newCommentUserPassword} = ctx.request.body
    let findData = await CommentUser.find({
        where: {
            commentUserEmail,
            commentUserPassword: Md5(commentUserPassword),
        },
        attributes: { exclude: ['commentUserPassword', 'created_time', 'created_time']}
    })
    if(findData){
        let params =  {commentUserPassword:Md5(newCommentUserPassword)}
        let data = await CommentUser.update(
            params,
            {
                where: {commentUserEmail},
                attributes: { exclude: ['commentUserPassword','created_time', 'created_time']}
            }
        )
        ctx.body =  {
            code: 200,
            message: '用户密码修改成功',
            data: findData
        }
    }else{
        ctx.body =  {
            code: 100,
            message: '账号密码不匹配',
        }
    }
    
}



exports.UserLogin = UserLogin
exports.UserRegister = UserRegister
exports.UserBasicChange = UserBasicChange
exports.UserBasicPassword = UserBasicPassword




