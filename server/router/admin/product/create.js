let { collection, end,MESSAGE} = require('../../tools');
module.exports = (req,res)=>{
    console.log(req.body)
    collection('product',res)
        .then(({col,db})=>{
            col.insertOne(req.body)
                .then(data=>{
                    console.log(5555,data)
                    if(data.result.n>0){
                        end(res,'success',db)
                    }else{
                        end(res,'collectionInsertNoData',db)
                    }
                })
                .catch(()=>{
                    end(res,'collectionInsertError',db)
                })
        })
}