let { collection, end, ObjectId } = require('../../db');
module.exports=(req,res)=>{
    // 商品req.query id
    // console.log(req.query)
    collection('product',res)
        .then(({col,db})=>{
            col.findOne({_id:ObjectId(req.query.id)})
            // col.findOne({_id:22222222222})
                .then(data=>{
                    console.log(data)
                    if(data){
                        end(res,{errno:0,data},db)
                        return
                    }
                    end(res,'collectionUpdataNoData',db)
                })
                .catch(err=>end(res,'collectionFindError',db))
        })

}