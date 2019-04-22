/**
 * user_basic 1:1  青蓝
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_basic', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, // 是否允许自增
            primaryKey: true, // 主键
            field: 'user_id', // 对应数据库字段
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_name'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "用户信息表",

    })
}

const classMethods = {
    //根据id查询
    getUserById: function(id) {
        return this.findById(id);
    }
}