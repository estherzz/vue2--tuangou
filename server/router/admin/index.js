let {Router} = require('express');
module.exports = new Router()
    // 创建APP时发送的请求
    .get('/admin/userInfo',require('./manager/userInfo'))
    .get('/admin/logout',require('./manager/logout'))
    // 商品列表页
    .get('/admin/product/list',require('./product/list'))
    .get('/admin/product/detail',require('./product/detail'))
    // 用户列表页
    .get('/admin/user/list',require('./user/list'))
    // 用户列表 编辑 获取信息展示
    .get('/admin/user/detail',require('./user/detail'))
  
    
    .post('/admin/login', require('./manager/login'))
    .post('/admin/userInfo',require('./manager/userInfo'))
    // 修改用户名密码
    .post('/admin/manager/updata', require('./manager/updata'))
    
    .post('/admin/product/upload',require('./product/upload'))
    // 创建商品提交接口
    .post('/admin/product/create',require('./product/create'))
    // list删除商品
    .post('/admin/product/remove',require('./product/remove'))
    // 编辑商品提交接口
    .post('/admin/product/edit',require('./product/edit'))
    // 用户
    .post('/admin/user/create',require('./user/create'))
    // 用户编辑提交
    .post('/admin/user/edit',require('./user/edit'))
    // 删除用户信息
    .post('/admin/user/remove',require('./user/remove'))