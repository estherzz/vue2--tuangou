let {MESSAGE} =require('../../tools')
module.exports = (req,res)=>{
    console.log(333,req.session)
    //页面刷新 查看session中是否存在会话id
    if (req.session.username) {
        //存在返回会话标记的id
        res.json({errno:0,data:req.session.username})
    } else {
        //不存在则重新登录
        res.json(MESSAGE.notLogin)
    }
}