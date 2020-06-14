let Formidable = require('formidable');
// 操作文件使用fs模块
let fs = require('fs');
let { UPLOAD_SAVE_DIR, UPLOAD_CACHE_DIR, ROOT,MESSAGE} = require('../../tools')
let path = require('path')
module.exports=(req,res)=>{
    // 表单接收器
    let form = new Formidable();
    form.uploadDir = path.join(ROOT,UPLOAD_CACHE_DIR)
    console.log(form)
    // res.json('上传')
    // 解析上传文件
    form.parse(req, (err, field, files)=>{
        console.log(111,err, field, files)
        if(err){
            // 上传文件解析错误
            res.json(MESSAGE.uploadParseError)
        }else{
            let filePath = UPLOAD_SAVE_DIR      
                +String(Math.random()).slice(2,12)
                +String(Math.random()).slice(2,12)
                +path.extname(files.file.name)
                console.log(filePath)
            
            fs.rename(files.file.path,path.join(ROOT,filePath),(err)=>{
                console.log('222fserr',err)
                console.log(33333,filePath)
                if(err){
                    res.json(MESSAGE.uploadSaveError)
                }else{
                    res.json({errno:0,data:filePath})
                }
            })
            // form.uploadDir = path.join(ROOT,UPLOAD_SAVE_DIR)+
        }
    })
}