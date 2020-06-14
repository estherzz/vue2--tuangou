let {collection, end, ObjectId,ROOT} = require('../../tools');
let path = require('path');
let fs = require('fs')
module.exports = (req,res)=>{
    console.log(77777777,req.body.img)
    collection('product',res)
        .then(({col,db})=>{
            col.deleteOne({_id:ObjectId(req.body.id)})
            .then(data=>{
                // 判断数据库删除成功
                if(data.result.n>0){
                    // 判断图片删除成功
                    try{
                        fs.unlinkSync(path.join(ROOT,req.body.img));
                        end(res,'success',db)
                    }catch(e){
                        end(res,'removeImgError',db)
                    }
                }else{
                    end(res,'collectionRemoveNoData',db)
                }
                
            })
            .catch(err=>end(res,'collectionRemoveError'))
        })
}