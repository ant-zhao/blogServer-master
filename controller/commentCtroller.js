const { Comment, Replay, CommentUser}  = require('../model/ref')
const Md5 = require('md5')
const { SendEmail } = require('../utils/uitls')
const registerHtml = 
    `<h2>
        亲爱的小主: <br/>
        您好哦！
     </h2>
     <p>
            感谢小主注册青蓝up站,希望多多给些支持哦！<br/>
            主页: http://blog.jjz6.cn/homePage <a href='http://blog.jjz6.cn/homePage' target='_blank'> 进入</a><br/>
            小主密码: qlupmima
     </p>`

let AddComment = async( ctx, next) => {
    let { blogId, userData, commentContent, commentType } = ctx.request.body
    userData.commentUserPassword = Md5('qlupmima')
    let commentUserId = ''
    let obj = {isSendEmail: false}
    let rp = await CommentUser.findOrCreate({
        where: {commentUserEmail: userData.commentUserEmail},
        defaults: userData
    }).spread((res, created) => {
        if(created){
            obj.isSendEmail = true
            obj.userData = userData
            SendEmail(userData.commentUserEmail, '青蓝up注册信息', registerHtml)
        }
       commentUserId = res.commentUserId
    })
    let data = await Comment.create({blogId, user_id: commentUserId,commentContent, commentType})
    ctx.body = {
        code: 200,
        message: '~~ 评论(留言)添加成功！',
        data:  obj
    }
}

let AddReplay = async( ctx, next ) => {
    let { blogId, repalyUserId, userData, replayContent, comment_id } = ctx.request.body
    userData.commentUserPassword = Md5('qlupmima')
    let commentUserId = ''
    let obj = {isSendEmail: false}
    let rp = await CommentUser.findOrCreate({
        where: {commentUserEmail: userData.commentUserEmail},
        defaults: userData
    }).spread((res, created) => {
        if(created){
            obj.isSendEmail = true
            obj.userData = userData
            SendEmail(userData.commentUserEmail, '青蓝up注册信息', registerHtml)
        }
       commentUserId = res.commentUserId
    })
    let data = await Replay.create({blogId, comment_id, replay_user_id: repalyUserId, user_id: commentUserId, replayContent})
    ctx.body = {
        code: 200,
        message: '~~ 回复成功！',
        data: obj
    }
}
let ReplayAddPraise = async(ctx, next) => {
    let {replayId} =  ctx.request.body
    let data = await Replay.findOne({
        where:{replayId}
    })
    let _praise = data.repalyPraise +1
    let _data = await Replay.update({repalyPraise: _praise},{
        where:{replayId}
    })
    ctx.body = {
        code: 200,
        message: '~~ 评论点赞成功',
        data: _data
    }
}
let CommentAddPraise = async(ctx, next) => {
    let {id} =  ctx.request.body
    let data = await Comment.findOne({
        where:{id}
    })
    let _praise = data.commentPraise +1
    
    let _data = await Comment.update({commentPraise: _praise},{
        where:{id}
    })
    ctx.body = {
        code: 200,
        message: '~~ 回复点赞成功',
        data: _data
    }
}

let GetCommentList = async(ctx, next) => {
    let { commentType, pageSize=10, pageNumber = 1, blogId} = ctx.request.body
    let _where = {
        commentType,
        blogId
    }
    if(commentType == '2'){
        delete _where.blogId  
    }
    let data = await Comment.findAndCountAll({
        where: _where,
        offset: pageSize * ( pageNumber-1 ), // 跳过多少条
        limit: pageSize,
        distinct: true,
        order: [
            ["created_time",'DESC'],
        ],
        include: [
            { 
                model: Replay,
                // offset: 0,
                // limit: 2,
                order: [
                    ["created_time",'DESC'],
                ],
                as: 'replayList',
                include: [
                   { model: CommentUser, as: 'userData' },
                   { model: CommentUser, as: 'repalyUser'}
                ],

            },
            { model: CommentUser, as: 'userData' }
        ]
    })
    ctx.body = {
        code: 200,
        message: '~~ 评论列表查询成功！',
        data: data
    }
}


let ReplayDelete = async(ctx, next) => {
    let {replayId} =  ctx.request.body
    let data = await Replay.destroy({
        where:{replayId}
    })
    ctx.body = {
        code: 200,
        message: '~~ 删除成功',
        data: data
    }
}

let CommentDelete = async(ctx, next) => {
    let {id} =  ctx.request.body
    let data = await Comment.destroy({
        where:{id}
    })
    ctx.body = {
        code: 200,
        message: '~~ 删除成功',
        data: data
    }
}

exports.AddComment = AddComment
exports.AddReplay = AddReplay
exports.GetCommentList = GetCommentList
exports.CommentAddPraise = CommentAddPraise
exports.ReplayAddPraise = ReplayAddPraise
exports.CommentDelete = CommentDelete
exports.ReplayDelete = ReplayDelete






