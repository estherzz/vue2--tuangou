## 说明：
本项目包含 移动端（vue全家桶）+pc端后台管理系统（自建vue脚手架）+服务器端（nodejs+mongodb）
github地址：[https://github.com/estherzz/vue2--tuangou](https://github.com/estherzz/vue2--tuangou)


## 技术栈
vue cli, vue, vuex, vue-router, axios, webpack, ES6, ES Module, mongodb，ElementUI，nodejs,  express,  mongodb, session

##实现功能
**移动端：**
- 分类模块
   `查看更多`
   `价格排序`
   `好评排序`
  ` 销量排序`
   `优惠排序`
   `搜索功能`
   `点击商品`-跳转商品详情页面
- 详情模块
  `购物车`-价格实时结算
  `立即购买`-跳转购物车页面
- 购物结算模块
  `总价 `- 随单个商品数量增加而增加

**后台管理系统pc端：**
- 登录验证
  `用户名密码验证`
  `刷新免重复登录`
  `修改用户名/密码`
  `二次确认密码` 
- 商品管理
  `创建商品`
  `图片上传`
  `编辑商品`
  `删除商品`
  `商品列表`
- 用户管理
  `创建用户`
  `用户列表`
 

## 项目运行
git clone https://github.com/estherzz/vue2--tuangou.git

- 安装mongodb    [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
`MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，在安装完成后需要创建，并且数据目录放在根目录下（(如： C:\ 或者 D:\ 等 )`
`推荐在 C 盘安装 mongodb=>创建一个 data 的目录 => data 目录里创建 db 目录。`

- 安装 nodejs   [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- 打开数据库 
  mongod --dbpath 自定义想要存储数据的数据库位置

- 在项目文件目录打开命令窗口

![项目文件目录.png](https://upload-images.jianshu.io/upload_images/20110534-4254f3077fedd9fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 导入数据：
 mongoimport -d bp_data -c product --file ./database/product
- **进入server目录**
 cd server
- 打开务器
 node app.js
- 打开网页
  移动端  [http://localhost:3003/](http://localhost:3003/) （按键F12 => 调成手机模式）
  后台管理系统pc端 [http://localhost:3003/admin/](http://localhost:3003/admin/)  (初始登录账号：yiyi，密码：123abc)



**版本：**
mongodb： ^3.5.4
nodejs: ^12.16.2.0

## 移动端截图
![首页.png](https://upload-images.jianshu.io/upload_images/20110534-74ebd270cc682082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)

![商品列表页.png](https://upload-images.jianshu.io/upload_images/20110534-25af2fdc2494e464.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)
![商品列表+查看更多.png](https://upload-images.jianshu.io/upload_images/20110534-49dbd7b8e67dda7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)
![商品列表+搜索结果.png](https://upload-images.jianshu.io/upload_images/20110534-e6bcff540a21669d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)
![商品详情.png](https://upload-images.jianshu.io/upload_images/20110534-8ccaf2ce8391815c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)
![购物结算.png](https://upload-images.jianshu.io/upload_images/20110534-9d79791bd3afadb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)

## 移动端gif效果动图
![首页.gif](https://upload-images.jianshu.io/upload_images/20110534-819e33f9ccac743a.gif?imageMogr2/auto-orient/strip)

![美食模块 -- 查看更多+价格排序+好评排序+销量排序+优惠排序+搜索功能.gif](https://upload-images.jianshu.io/upload_images/20110534-e7e4648db2fc9cbe.gif?imageMogr2/auto-orient/strip)

![跳转商品详情.gif](https://upload-images.jianshu.io/upload_images/20110534-bcc12e2bd644f76d.gif?imageMogr2/auto-orient/strip)

![底部价格结算.gif](https://upload-images.jianshu.io/upload_images/20110534-2ce35805bda49be0.gif?imageMogr2/auto-orient/strip)
![购买页面价格结算.gif](https://upload-images.jianshu.io/upload_images/20110534-a81568bbd2633344.gif?imageMogr2/auto-orient/strip)

## 后台管理系统PC端截图

![登录.png](https://upload-images.jianshu.io/upload_images/20110534-62bff4b297b73809.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![创建商品.png](https://upload-images.jianshu.io/upload_images/20110534-b5e330cddb49c8f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![商品列表.png](https://upload-images.jianshu.io/upload_images/20110534-f026528d49a88861.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![创建用户.png](https://upload-images.jianshu.io/upload_images/20110534-4084e7b389c3a8a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![用户列表.png](https://upload-images.jianshu.io/upload_images/20110534-90b3033cf8243b0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

## 后台管理系统PC端gif效果图
![admin首页.gif](https://upload-images.jianshu.io/upload_images/20110534-cc25145bcaed242d.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![创建商品.gif](https://upload-images.jianshu.io/upload_images/20110534-6e85216959c72603.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![创建商品.png](https://upload-images.jianshu.io/upload_images/20110534-d0af6f825c2facb7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![创建用户.png](https://upload-images.jianshu.io/upload_images/20110534-a8a59e4ba0d33eb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![登录.png](https://upload-images.jianshu.io/upload_images/20110534-5b1efa34e146b6e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![删除商品.gif](https://upload-images.jianshu.io/upload_images/20110534-4b21f6b98df78bbc.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![商品列表.gif](https://upload-images.jianshu.io/upload_images/20110534-46a9f3df5caaee95.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![商品列表.png](https://upload-images.jianshu.io/upload_images/20110534-8f08d09ec4803677.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![修改密码.gif](https://upload-images.jianshu.io/upload_images/20110534-dd999798213f5da3.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![修改商品.gif](https://upload-images.jianshu.io/upload_images/20110534-5c37bccad22540c6.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![用户列表.png](https://upload-images.jianshu.io/upload_images/20110534-4b2d38bcba74f135.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

![用户列表+创建用户.gif](https://upload-images.jianshu.io/upload_images/20110534-a18d8bc9b47828ea.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
