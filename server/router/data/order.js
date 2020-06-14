let { collection, end, filter, PRODUCT_KEY } = require('../tools');
module.exports = (req, res) => {
    // type商品分类， id排序字段，mode排序规则（1升序，-1降序）
    let { type, id, mode } = req.query;
    console.log(8888, req.query, +mode, { [id]: +mode })
    // 查询条件
    let condition = {};
    if (+type > 0) {
        condition.type = +type;
    }
    if (id === 'discount') {
        return collection('product')
            .then(({ col, db }) => {
                col.find(condition)
                    .toArray()
                    .then(data => {
                        // 通过数组分方法排序
                        if (data.length) {
                            data.sort((a, b) => {
                                return mode * (a.originPrice - a.price) - (b.originPrice - b.price) * mode
                            })
                            data = data.slice(0, 10);

                            end(res, filter(data, PRODUCT_KEY), db)
                        } else {
                            end(res, [], db)
                        }
                    })
            })
            .catch(err => res.json([]))
    }
    collection('product')
        .then(({ col, db }) => {
            col.find(condition)
                // 倒叙
                .sort({ [id]: +mode })
                // 截取10个
                .limit(10)
                .toArray()
                .then(data => {

                    end(res, filter(data, PRODUCT_KEY), db)
                })
                .catch(err => end(res, [], db))
        })
        .catch(err => res.json([]))
}