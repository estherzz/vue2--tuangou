let {collection, end} = require('../../db');
module.exports = (req,res)=>{
    collection('user',res)
        .then(({col,db})=>{
            console.log(req.body)
            col.insertOne(req.body)
                .then(data=>{
                    console.log(data.result.n)
                    if(data.result.n>0){
                        // 存储数据成功
                        return end(res,'success',db)
                    }
                    end(res,'collectionInsertNoData',db)
                })
                .catch(err=>end(res,'collectionInsertError',db))
        })
        
}