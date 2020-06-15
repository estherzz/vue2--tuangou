module.exports=(req,res)=>{
    delete req.session.username;
        //返回首页
        res.redirect('/admin') 
}