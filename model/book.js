/**
 * 
 * Book 1:1 青蓝
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book',{
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, // 是否允许自增
            primaryKey: true, // 主键
            field: 'book_id', // 对应数据库字段
        },
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'book_title'
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'book_author'
        },
        bookDes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'book_Des'
        },
        bookpdfUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'bookpdf_url'
        },
        bookdlUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'bookkdl_url'
        },
        bookPic: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'book_pic'
        },
    },{
        underscored: false, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "book 列表",
    })
  }

  const classMethods = {
  
  }