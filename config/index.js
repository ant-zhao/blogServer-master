
const IsProduct = process.env.NODE_ENV == 'production'

let dbBase = null
let imgHttp = null

if(IsProduct) {
         dbBase =  {
                host: '148.70.105.126',
                user: 'root',
                password: 'mysqlmima',
                port: 3306
        }
        imgHttp = 'http://blog-api.jjz6.cn'
}else{
        dbBase =  {
                host: '148.70.105.126',
                user: 'root',
                password: 'mysqlmima',
                port: 3306
        }
        imgHttp = 'http://blog-api.jjz6.cn'
}



exports.dbBase = dbBase
exports.imgHttp = imgHttp