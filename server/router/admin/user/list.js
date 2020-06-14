let {collection, end, ObjectId} =require('../../db');
module.exports = (req,res)=>{
    let page = req.query.page-1;
    console.log(req.query.page)
    collection('user',res)
        .then(({col,db})=>{
            col.find()
            // 跳过
                .skip(5*page)
                // 限制
                .limit(5)
                .toArray()
                .then(data=>{
                   if(data.length){
                      return end(res,{errno:0,data},db)
                   }
                   end(res,'collectionFindNoData',db)
                })
                .catch(err=>end(res,'collectionFindError',db))

        })
}