
/**
 * mysql 配置文件
 */
const mysql = require('mysql');
const dbBase = require('../config').dbBase

let config = {
    host: dbBase.host,
    user: dbBase.user,
    password: dbBase.password,
    database: 'cms',
    port: dbBase.port,
    multipleStatements: true, // 允许多条sql 同时进行
}

let pool = mysql.createPool(config)

let query = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
           if(err) {
               reject(err)
           } else {
               connection.query(sql, value, (err, rows) => {
                   if(err) {
                       reject(err)
                   }else{
                       resolve(rows)
                   }
                   connection.end()
               }) 
           }
        })
    })
}

module.exports = {
    query
}
