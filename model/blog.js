/**
 * 
 * blog 1:1 青蓝up
 */


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('blog', {
        blogId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'blog_id'
        },
        blogLikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'blog_likes',
            defaultValue: 999
        },
        blogHot: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'blog_hot',
            defaultValue: 999
        },
        blogTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blog_title'
        },
        blogImg: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blog_img'
        },
        blogDes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blog_Des'
        },
        blogContent: {
            // type: DataTypes.TEXT('long'),
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'blog_content'
        }
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "blog 管理表",
    })
}


const classMethods = {
  
}