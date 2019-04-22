const Md5 = require('md5') 
let {Users}  = require('../model/ref')

let Register = async(ctx, next) =>{
    let {userName, password} = ctx.request.body
    let rp = await Users.findOrCreate({
        where: {userName},
        defaults: {userName, password: Md5(password)}
    }).spread((user, created) => {
        if(created){
            return {
                code: 200,
                message: '用户创建成功'
            }
        }else{
            return {
                code: 1001,
                message: '~~ 小主 ,用户名已被暂用了！'
            }
        }
    })
    ctx.body = rp
}

let Login = async(ctx, next) => {
    let{ userName, password } = ctx.request.body
    let userData = await Users.findOne({
        where: {
            userName
        },
    })
    let _body = null
    if(userData.userName != userName || userData.password != Md5(password)){
        _body = {
            code: 1001,
            message: '用户名或密码错误'
        }
    }else {
        delete userData.password
        _body = {
            code: 200,
            message: '登录成功',
            data: userData
        }
    }
    ctx.body = _body
}


exports.Register = Register
exports.Login = Login
