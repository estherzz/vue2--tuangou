let { collection, end, ObjectId, ROOT } = require('../../tools');
let fs = require('fs');
let path = require('path');
module.exports = (req, res) => {
    let { _id, ...args } = req.body;
    // console.log(33333333,args.img)
    // console.log(333333333333,req.query)
    collection('product', res)
        .then(({ col, db }) => {
            col.updateOne(
                // 查询条件
                { _id: ObjectId(_id) },
                // 更新 不可更新_id
                { $set: args })
                .then(data => {
                    // console.log(1111,data)
                    if (data.result.n > 0) {
                        if (req.query.img === req.body.img) {
                            return end(res, 'success', db)
                        }
                        // 删除当前图片
                        fs.unlink(path.join(ROOT, req.query.img), err => {
                            if (err) {
                                console.log(err)
                                return end(res, 'removeImgError', db)
                            }
                            end(res, 'success', db)
                        })
                    } else {
                        end(res, 'collectionUpdateNoData', db)

                    }
                })
                .catch(err => console.log(err))
        })
}