let {MESSAGE} =require('../../tools')
module.exports = (req,res)=>{
    console.log(req.session)
    if(req.session.username){
        res.json({errno:0,data:req.session.username})
    }else{
        res.json(MESSAGE.notLogin)
    }
}