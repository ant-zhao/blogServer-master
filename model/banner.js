/**
 * 
 * banner 1:1 青蓝
 */


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('banner', {
        bannerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'banner_id'
        },
        bannerTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'banner_title'
        },
        bannerImg: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'banner_img'
        }
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "banner 管理表",
    })
}


const classMethods = {
  
}