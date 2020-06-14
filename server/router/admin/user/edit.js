let { collection, end,ObjectId} = require('../../db');

module.exports=(req,res)=>{
    let {_id,...args}=req.body;
    console.log(_id,args)
    collection('user',res)
        .then(({col, db})=>{
            col.updateOne(
                {_id:ObjectId(_id)},
                {$set:args},
            )
            .then(data=>{
                console.log(88888888888888,data.result)
                if(data.result.n>0){
                    end(res,'success',db);
                    return; 
                }
                end(res,'collectionUpdateNoData',db)
            })
            .catch(err=>end(res,'collectionUpdateError',db))
        })
}