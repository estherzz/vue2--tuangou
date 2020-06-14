let { collection, end, ObjectId} = require('../../db');
module.exports=(req,res)=>{
    collection('user',res)
        .then(({col,db})=>{
            col.findOne({_id: ObjectId(req.query.id)})
                .then(data=>{
                    if(data){
                       return end(res,{errno:0,data},db)
                    }
                    end(res,'collectionFindNoData',db)
                })
                .catch(err=>end(res,'collectionError',db))
        })
        
}