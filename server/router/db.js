// let db = require('db');
let { MongoClient,
    // 数据库的eid被ObjectId()包裹
    ObjectId } = require('mongodb');
let { MONGO_URL, MONGO_NAME, MESSAGE } = require('../conf');
function end(res, data, db) {
    if (typeof data === 'string') {
        data = MESSAGE[data];
        // console.log(444, data)
    }
    res && res.json(data);
    db.close();
}
/***
 * 操作MongoDB集合的方法
 * @collectonName  集合名称
 * @res  响应对象
 * return Promise对象
 * **/

function collection(collectonName, res) {
    // 返回promise对象
    return new Promise((resolve, reject) => {
        // 链接数据库  (数据库名称)
        MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {
            // console.log(err,client)
            if (err) {
                // res.json({error:1,msg:'数据库错误'})
                // // 关闭数据库
                // client.close();
                res && end(res, MESSAGE.databaseError, client)
                // 若没有传递res 里边关闭数据库 在外部监听失败
                !res && client.close();
                reject(err);
                return;
            }
            // MONGO_NAME 数据库（此时为db_data）
            let database = client.db(MONGO_NAME);
            // console.log(database);
            resolve({
                db: client,
                col: database.collection(collectonName)
            })
        })
    })
}
// 暴露接口
module.exports = { collection, end, ObjectId }