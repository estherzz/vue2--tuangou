let { collection, end, ObjectId} = require('../../db');
module.exports=(req,res)=>{
    collection('user',res)
        .then(({col,db})=>{
            col.deleteOne({_id:ObjectId(req.body.id)})
                .then(data=>{
                    if(data.result.n>0){
                        end(res,'success',db)
                        return;
                    }
                    console.log('nodata')
                    end(res,'collectionRemoveNoData',db)

                })
                .catch(err=>end(res,'collectionRemoveError'))
        })
}