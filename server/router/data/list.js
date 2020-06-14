let { collection, end, PRODUCT_KEY, filter } = require('../tools');
module.exports = (req, res) => {
    // 定义查询条件
    let condition = {};
    // 如果有分类
    if (+req.query.id > 0) {
        condition.type = +req.query.id
    }
    collection('product')
        .then(({ col, db }) => {
            // 根据id即type找对应书籍
            col.find(condition)
                // 最新的数据 倒叙排序
                .sort({ _id: -1 })
                // 接口文档定10条
                .limit(10)
                .toArray()
                .then(data => {
                    if (data.length) {
                        // 接口文档 -返回一个数组
                        return end(res, filter(data, PRODUCT_KEY), db)
                    }
                    end(res, [], db)
                })
                .catch(err => end(res, [], db))
        })
        .catch(err => res.json([]))
}