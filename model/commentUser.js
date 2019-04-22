/**
 * 
 * 留言用户表
 * 
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment_user', {
        commentUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'comment_userid'
        },
        commentUserImg: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'comment_userimg'
        },
        commentUserEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'comment_useremail'
        },
        commentUserName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'comment_username'
        },
        commentUserPassword: {
            type: DataTypes.STRING(1000),
            field: 'comment_userpassword'
        }
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, 
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "留言用户表",
    })
}


const classMethods = {
  
}