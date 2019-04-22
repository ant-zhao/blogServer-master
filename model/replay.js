/**
 * 
 *  回复评论或者留言表
 * 
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('replay', {
        replayId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'replay_id'
        },
        blogId: {
            type: DataTypes.INTEGER,
            field: 'replay_blogid'
        },
        // repalyUserId: {
        //     type: DataTypes.INTEGER,
        //     field: 'replay_userid'
        // },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     field: 'user_id'
        // },
        replayContent: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            field: 'repaly_content'
        },
        repalyPraise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'repaly_praise',
            defaultValue: 99
        }
    },{
        underscored: true, //额外字段以下划线来分割
        createdAt: "created_time",
        updatedAt: "updated_time",
        timestamps: true, 
        freezeTableName: true, // Model 对应的表名将与model名相同
        classMethods: classMethods,
        comment: "回复表",
    })
}


const classMethods = {
  
}