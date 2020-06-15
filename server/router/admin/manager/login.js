let { collection, end } =require('../../db');
// 封装返回数据 关闭数据库方法

module.exports = (req, res) => {
    // console.log('login',req.body)
    // console.log('login',req.session)
    collection('manager',res)
        .then(({db,col})=>{
            // 查询登录的信息是否在数据库
            col.findOne(req.body)
            // 返回查询的结果data data存在返回查询到的数据 不存在返回null
                .then(data=>{
                    if(data){
                        // 设置session 在cookies中可查到
                        req.session.username = req.body.username
                        // 返回数据
                        // res.json({errno : 0, data : req.body.username})
                        // // 关闭数据库
                        // db.close();
                        end(res, {errno : 0, data : req.body.username}, db)
                        return;
                    }
                    // res.json({errno : 2, msg : '用户名或密码不正确'})
                    // db.close();
                    end(res, 'loginErr', db)

                })
                // then执行失败执行catch
                .catch(err=>{
                    // end(res, {errno : 3, msg : '数据库错误2'}, db)
                    // 集合查询错误
                    end(res, 'collectionFindError', db)

                })
        })

}