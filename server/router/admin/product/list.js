let { collection, end} = require('../../db');
module.exports=(req,res)=>{
    let page = req.query.page-1;
    collection('product',res)
        .then(({col,db})=>{
            col.find()
            // 倒叙排序 最新的数据
                .sort({_id:-1})
            // 跳过多少数据
                .skip(8*page)
                .limit(8)
                .toArray()
                .then(data=>{
                    if(data.length){
                        return end(res,{errno:0,data},db)
                    }
                    end(res,'collectionFindNoData',db)
                    // console.log(data)
                })
                .catch(err=>end(res,'collectionFindError',db))
        })
}