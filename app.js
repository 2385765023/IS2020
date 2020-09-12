//  引入express模块
const express = require('express')
//  引入express-session模块
const session = require('express-session')
//  引入body-parser模块,用于接收POST参数
const bodyParser = require('body-parser')
//  引入跨域模块，解决跨域问题
const cors = require('cors')
//  创建数据库连接
require('./model/connectMongodb')



//  创建服务器
const app = express()
//  将跨域模块，加载到路由中
app.use(cors())

// 设置跨域和相应数据格式
// app.all(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
//   res.setHeader('Content-Type', 'application/json;charset=utf-8')
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   if (req.method == 'OPTIONS') res.send(200)
//   /*让options请求快速返回*/ else next()
// })

//  处理POST参数
app.use(bodyParser.urlencoded({extended:false}))
//  配置session
app.use(session({
  secret:'MR',
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}))

//  设置全局拦截，检验是否登录
app.use((req,res,next)=>{
  //  访问的不是登录页面，且未登录
  console.log('拦截器：',req.session.id)
  if(req.url != '/login' && !req.session.id ) {
    console.log('重定向到login页')
    return res.redirect('/login')
  }
  //  1.访问的是登录页面（登录、未登录）
  //  2.访问的不是登录页面，但是已经登录了
  next()
})

//  挂载统一的返回结果的方法
app.use(require('./model/sendResult'))

//  创建"登录"路由
//  todo:这里其实应该应该写成use中间件，但是因为前段是vue，不需要从后端获得页面，所以写成post也行
app.post('/login',require('./routes/login'))
//  创建"设备管理"路由
app.use('/devices',require('./routes/devices'))

app.get('/index',(req,res)=>{
  res.send('hello')
})

//  监听8080端口
app.listen(8080)

module.exports = app
console.log('服务器启动成功')