let path = require('path');
let root = process.cwd();

if(process.env.NODE_ENV === 'production'){
    // 发布环境  指令 yarn build
    module.exports={
        // 静态资源发布的位置
        outputDir:path.join(root,'../server/static/home'),
        // 模板发布的位置
        indexPath:path.join(root,'../server/views/home.html'),
        //  静态文件相对路径
        publicPath:'/static/home/'
    }
}else{
    let proxyObj = {
        //目标地址
        target:'http://localhost:3003'
    }
    // 开发环境
    module.exports={
        // 为了可以跨域访问数据
        devServer:{
            proxy:{//代理
                '/data/*':proxyObj,
                '/static/*':proxyObj,
            }
        }

    }
}