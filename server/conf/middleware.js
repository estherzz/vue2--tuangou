let ejs = require('ejs');
let express = require('express');
let path = require('path');

let session = require('express-session');
let bodyParser = require('body-parser');

let { STATICS } = require('./index');
module.exports = app => {
    // 拓展名
    app.engine('html', ejs.__express)
    // 使用中间件
    app.use(session({
        secret: 'blackpink',
        resave: false,
        saveUninitialized: true
    }))

    // 解析请求数据 bodyParser.json()用于解析json格式的数据 
    //app.use(bodyParser.urlencoded({extended: false}) //用于解析application/x-www-form-urlencoded格式的数据
    app.use(bodyParser.json())
    // 静态化目录
    for (let key in STATICS) {
        app.use(key, express.static(path.join(process.cwd(), STATICS[key])))

    }
}
