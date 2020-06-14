let {Router} = require('express');
// 创建路由中间件
module.exports = new Router()
        // 移动端首页页面
        .get('/',require('./home'))
        // 后台管理系统页面
        .get('/admin',require('./admin'))


// // 路由 /
// app.get('/',(req,res)=>{
//     res.render('home.html')
// })
// 路由 /admin
// app.get('/admin',(req,res)=>{
//     res.render('admin.html')
// })