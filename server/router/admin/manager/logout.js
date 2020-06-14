module.exports=(req,res)=>{
    console.log(111,req.session)
    delete req.session.username;
    // console.log(222,req.session)
        //返回首页
        res.redirect('/admin') 
}