//创建基本的web服务器
const express = require('express')
const app = express()

var bodyParser = require('body-parser');//用于req.body获取值的
// app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true}));
//设置upload 
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));

// 使用swagger API 文档
var swaggerInstall = require('./Utils/swagger.js')
swaggerInstall(app)

//引入course.js等接口
const daily = require('./Router/dailyRoutes')
const article = require('./Router/articleRoutes')
const user = require('./Router/userRoutes.js')
const comment = require('./Router/commentRoutes.js')
const detail = require('./Router/detailRoutes.js')
const fans = require('./Router/fansRoutes.js')

//使用接口
app.use('/zwz/api/daily',daily)
app.use('/zwz/api/article',article)
app.use('/zwz/api/user',user)
app.use('/zwz/api/comment',comment)
app.use('/zwz/api/detail',detail)
app.use('/zwz/api/fans',fans)

app.get('/zwz',(req,res)=>{
    res.send('当前服务器已连接')
})

var fs = require('fs');
var path = require('path');
app.use(express.static(path.resolve(__dirname, './dist')));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './dist/index.html'));
  });

//监听接口
const port = process.env.port || 3000;
app.listen(port,function(){
    console.log(`http://localhost:${port}`)
})

