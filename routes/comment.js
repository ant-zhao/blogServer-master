const router = require('koa-router')()

const {AddComment, AddReplay, GetCommentList, CommentAddPraise, ReplayAddPraise, CommentDelete, ReplayDelete}  = require('../controller/commentCtroller')

router.prefix('/api/comment')
router.post('/addComment', AddComment)
router.post('/addReplay', AddReplay)
router.post('/getCommentList', GetCommentList)
router.post('/commentAddPraise', CommentAddPraise)
router.post('/replayAddPraise', ReplayAddPraise)
router.post('/commentDelete', CommentDelete)
router.post('/replayDelete', ReplayDelete)





module.exports  = router