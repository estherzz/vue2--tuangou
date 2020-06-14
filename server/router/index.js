// 引入路由中间件
// 页面
let page = require('./page')
// 后台管理系统
let admin = require('./admin')
// 移动端
let data = require('./data')
// 统一安装所有路由
module.exports=app=>{
    // 安装路由中间件
    app.use(page);
    app.use(admin);
    app.use(data);
}