let path = require('path');
let express = require('express')
module.exports = app =>{
    // mock数据
    app.use('/data/',(req,res,next)=>{
        // console.log(req.url)
        let arr = req.url.split('?');
        arr[0]+='.json';
        // 拼接 数组的方法
        req.url = arr.join('?');
        next();
    },express.static(path.join(process.cwd(),'./static/data/')))

    app.post('/admin/login',require('./manager/login'))
    // app.post('/admin/login',(req,res)=>res.json({errno:1,msg:'登录失败'}))
    app.post('/admin/manager/update',(req,res)=>res.json({errno:0}))
    // app.post('/admin/manager/update',(req,res)=>res.json({errno:1,msg:'修改密码失败'}))
    app.post('/admin/product/upload',(req,res)=>res.json({errno:0,data:'/static/img/list/09.jpg'}))
    // app.post('/admin/product/upload',(req,res)=>res.json({errno:1,msg:'图片未保存成功'}))
    app.post('/admin/product/create',(req,res)=>res.json({errno:0,msg:'提交成功'}))
    app.post('/admin/product/remove',(req,res)=>res.json({errno:0,msg:'删除成功'}))
    app.post('/admin/product/edit',(req,res)=>res.json({errno:0,msg:'编辑成功'}))

    app.use('/admin',(req,res,next)=>{
        let arr = req.url.split('?');
        arr[0] += '.json';
        req.url = arr.join('?');
        next()
    },express.static(path.join(process.cwd(),'./static/data/')))
    
}