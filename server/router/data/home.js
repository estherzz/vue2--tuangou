let { collection, end, PRODUCT_KEY, AD_KEY, filter } = require('../tools');
module.exports = (req, res) => {
    collection('product')
        .then(({ col, db }) => {
            col.find()
                // 最新的数据 倒叙排序
                .sort({ _id: -1 })
                .limit(10)
                .toArray()
                .then(data => {
                    // console.log(filter(data, PRODUCT_KEY));
                    if (data.length) {
                        return data
                    }
                    end(res, {}, db)
                })
                //查找广告集合
                .then((data) => {
                    collection('ad')
                        .then(({ col, db }) => {
                            col.find()
                                .toArray()
                                .then(data2 => {
                                    if (data2.length) {
                                        // console.log(2222, filter(data2, AD_KEY), filter(data, PRODUCT_KEY))
                                        return end(res, { list: filter(data, PRODUCT_KEY), ad: filter(data2, AD_KEY) }, db)
                                    }
                                    end(res, {}, db)
                                })
                        })
                })
                .catch(err => end(res, {}, db))
        })
        .catch(err => res.json({}))

}