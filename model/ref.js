/**
 * 模型关系
 */

const { sequelize } = require('../db/sequelize')
const Users = sequelize.import('./users')
const Banner = sequelize.import('./banner.js')
const Music = sequelize.import('./music.js')
const BlogType = sequelize.import('./blogType.js')
const Blog = sequelize.import('./blog.js')
const HotSwiper = sequelize.import('./hot-swiper.js')
const MusicSheet = sequelize.import('./music-sheet.js')
const Comment = sequelize.import('./comment.js')
const Replay = sequelize.import('./replay.js')
const CommentUser = sequelize.import('./commentUser.js')
const Book = sequelize.import('./book.js')


/**
 * 模型关系
 */
Blog.belongsTo(BlogType, {foreignKey: 'blog_type_id'}) 
Comment.hasMany(Replay,{as: 'replayList', foreignKey: 'comment_id'})
// Replay.belongsTo(Comment, {foreignKey: 'comment_id', constraints: false})
Comment.belongsTo(CommentUser, {as: 'userData', foreignKey: 'user_id', constraints: false})
Replay.belongsTo(CommentUser, {as: 'userData', foreignKey: 'user_id', constraints: false})
Replay.belongsTo(CommentUser, {as: 'repalyUser', foreignKey: 'replay_user_id', constraints: false})


/**
 * 创建表 
 */ 
sequelize.sync({ force: false })

exports.Users =  Users
exports.Banner =  Banner
exports.Music =  Music
exports.BlogType =  BlogType
exports.Blog =  Blog
exports.HotSwiper = HotSwiper
exports.MusicSheet = MusicSheet
exports.Comment = Comment
exports.Replay = Replay
exports.CommentUser = CommentUser
exports.Book = Book










