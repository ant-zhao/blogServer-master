/**
 * 
 * music-sheet 1:1 青蓝
 */



module.exports = (sequelize, DataTypes) => {
    return sequelize.define('sheet',{
        sheetId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, // 是否允许自增
            primaryKey: true, // 主键
            field: 'sheet_id', // 对应数据库字段
        },
        sheetTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'sheet_title'
        },
        sheetUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'sheet_url'
        },
        sheetDes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'sheet_des'
        },
        sheetImg: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'sheet_img'
        },
        sheetTag: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'sheet_tag'
        },
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "song sheet ( 歌单推荐 ) ",
    })
  }

  const classMethods = {
  
  }