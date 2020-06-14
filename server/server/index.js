let fs = require('fs');
let path = require('path');
let http = require('http');
let https = require('https');
// 引入端口号
let {HTTP_PORT,HTTPS_PORT} = require('../conf');
// 定义端口号
let httpPort = process.argv[2] || HTTP_PORT;
let httpsPort = process.argv[3] ||(process.argv[2]?+process.argv[2]+1:HTTPS_PORT);

let key = fs.readFileSync(path.join(process.cwd(),'./server/ssl/private.pem'));
    let cert = fs.readFileSync(path.join(process.cwd(),'./server/ssl/file.crt'));
module.exports = app=>{
    // http
    http.createServer(app)
        .listen(httpPort,()=>console.log('listen http at'+httpPort));
        
    // https ({key,cert},app)
    https.createServer({key,cert},app)
        .listen(httpsPort,()=>console.log('listen https at'+httpsPort))
}
