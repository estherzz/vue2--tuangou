let {collection,end,MESSAGE} = require('../../tools');
module.exports=(req,res)=>{
    console.log(req.session)
    if(req.session.username){
         collection('manager',res)
        .then(({col,db})=>{
            col.updateOne(
                // 查询条件 更新内容 回调函数（也可在外部）
                {username:req.session.username},
                {$set:req.body}
            ).then(data=>{
                // console.log(3333333,data)
                if(data.result.n>0){
                    // 方法一 更改session
                    // req.session.username = req.body.username;
                    // 方法二 重新登录
                    delete req.session.username;
                    end(res,'success',db);
                }else{
                    // 没有更新数据
                    end(res,'collectionUpdataNoData',db);

                }
                
            })
            .catch(err=>end(res,'collectionUpdataError'))
        })
    }else{
        res.json(MESSAGE.notLogin)
        // // 重新登录
        // res.redirect('/admin')
    }
    
   
}