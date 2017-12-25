

const express = require('express');

const app = express();

//配置使用art-template 模板殷勤
const expressArTemplate = require('express-art-template');

//用来解析表单的数据post
const bodyParser = require('body-parser');
//调用comment.js文件来进行访问db.json文件 进行来阅读
const comment = require('./comment');
//吧node_modules开放出来
app.use('/node_modules/', express.static('./node_modules/'));

//配置使用art-template 模板殷勤
//res.render()默认回去views 目录查找指定的文件
app.engine('html', expressArTemplate);

//配置使用 body-parser 插件
//改插件会吧请求体数据解析到 req.body中
//也就是我们可以直接在后面的请求处理方法中通过访问req.body来获取数据表单 post请求数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
	comment.findAll((err, comments) => {
		if (err) {
			return console.log('读取数据失败')
		}
		res.render('index.html', {
			comments
		})
	});
	
});

//使用get来出来fabiao 文件
app.get('/fabiao', (req, res) => {
	res.render('fabiao.html');
});


//用post的方式来接受数据
app.post('/fabiao', (req, res) => {
  // 1. 接收表单 post 提交的数据
  // 2. 验证
  // 3. 持久化存储
  // 4. 发送响应
  const body = req.body
  
  if (!body.name || !body.name.length) {
    return res.send('name invalid')
  }
  if (!body.content || !body.content.length) {
    return res.send('content invalid')
  }

  comment.save(body, err => {
    if (err) {
      return res.send('500 Server Error')
    }
    // Express 为 res 提供了一个 redirect 方法可以试想重定向
    // 重定向会自动结束响应
    res.redirect('/')
  })
})

app.listen(3000, () =>{
	console.log('app runing....'); 
});