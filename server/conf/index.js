// 接口对象
module.exports={
    HTTP_PORT:3003,
    HTTPS_PORT:3004,
    // 静态化配置
    STATICS:{
        '/static/':'./static/',
        '/favicon.ico':'./static/favicon.ico'
    },
    // 数据库地址
    MONGO_URL:'mongodb://localhost:27017',
    // 数据库名称
    MONGO_NAME:'bp_data',
    // 返回提示信息
    MESSAGE:{
        // 成功
        success: { errno: 0,msg:'success'},
        // 打开数据库失败
        databaseError: { errno: 1,msg:'数据库错误'},
        // 登录失败
        loginErr: { errno: 2,msg:'用户名或密码错误'},
        // 没有登录
        notLogin: { errno: 3,msg:'该用户尚未登录，请登录！'},
        // 查询集合错误
        collectionFindError: { errno: 4,msg:'数据库错误'},
        // 没有找到数据
        collectionFindNoData:{errno: 5, msg: '数据库错误'},
        collectionUpdataNoData:{errno: 6, msg: '数据库错误'},
        collectionUpdataError:{errno: 7, msg: '更新数据失败'},
        // 上传文件解析错误
        uploadParseError:{errno:8, msg: '上传文件错误'},
        // 上传文件存储错误
        uploadSaveError:{errno:9, msg: '上传文件错误'},
        // 集合没有插入数据
        collectionInsertNoData: { errno: 10,msg: '数据库错误'},
        // 集合插入数据错误
        collectionInsertError: { errno: 11,msg: '数据库错误'},
        // 没有删除数据
        collectionRemoveNoData:{ errno: 12,msg: '数据库错误'},
        collectionRemoveError:{ errno: 13,msg: '数据库错误'},
        removeImgError: { errno:14, msg: '删除文件错误'},
        collectionUpdateNoData: { errno: 15,msg: '数据库错误'},
        collectionUpdateError: { errno: 16,msg: '数据库错误'},
    },
    // 缓存目录
    UPLOAD_CACHE_DIR:'/cache/upload/',
    // 存储目录
    UPLOAD_SAVE_DIR:'/static/upload/',
    // 根路径
    ROOT:process.cwd(),
    // 前端 移动端 商品过滤字段
    PRODUCT_KEY: ["img", "title", "sales", "price", "originPrice", "_id"],
    AD_KEY: ["title", "description", "product", "url", "_id"]
  }