

const { dbBase } = require('../config') 
const Sequelize = require('sequelize')


const {host, user, password, port} = dbBase

const sequelize = new Sequelize('cms', user, password,{
    host: host,
    port: port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

/**
 * 测试数据库连接
 */

sequelize.authenticate().then(res => {
    console.log('数据库连接成功！！！')
}).catch(err => {
    console.log('数据库连接失败')
    console.error('连接失败原因', err)
    throw err
})

exports.Sequelize = Sequelize
exports.sequelize = sequelize
