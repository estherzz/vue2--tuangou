let { collection, end, filter, PRODUCT_KEY} = require('../tools');
module.exports = (req,res)=>{
    // 商品标题是否包含搜索词
    console.log(req.query)
    let {type,val} = req.query;
    // 查询条件
    let condition = {};
    if(+type>0){
        condition.type=+type;
    }
    // 正则匹配 i不区分大小写
    condition.title = new RegExp(val,'i');// => '/val/i'
    collection('product')
        .then(({col,db})=>{
            col.find(condition)
            // 倒叙
                .sort({_id:-1})
                // 截取10个
                .limit(10)
                .toArray()
                .then(data=>end(res,filter(data,PRODUCT_KEY),db))
                .catch(err=>end(res,[],db))
        })
        .catch(err=>end(res,[],db))
}