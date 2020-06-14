let express = require('express');
// 引入server
let server = require('./server')
// 引入中间件
let middleware = require('./conf/middleware')
// 引入路由
let router = require('./router')


// 创建应用程序
let app = express();

middleware(app);
router(app);
server(app);
// 引入mock数据 并使用 （临时）
// require('./router/mock')(app)





