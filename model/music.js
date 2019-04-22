/**
 * 
 * music 1:1 青蓝
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('music',{
        musicId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, // 是否允许自增
            primaryKey: true, // 主键
            field: 'music_id', // 对应数据库字段
        },
        musicTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'music_title'
        },
        musicAuthor: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'music_author'
        },
        musicUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'music_url'
        },
        musicPic: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'music_pic'
        },
        musicLrc: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'music_lrc'
        }
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "music",
    })
  }

  const classMethods = {
  
  }