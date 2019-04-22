/**
 * 
 * 留言评论表
 * 
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        blogId: {
            type: DataTypes.INTEGER,
            field: 'comment_blogid'
        },
        commentContent: {
            type: DataTypes.STRING(1000),
            field: 'comment_content'
        },
        commentType: {
            type:   DataTypes.ENUM,
            values: [ '1' , '2'] // 1 评论 2 留言
        },
        commentPraise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'comment_praise',
            defaultValue: 99
        }
    },{
        underscored: false, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, 
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "评论或者留言表",
    })
}


const classMethods = {
  
}