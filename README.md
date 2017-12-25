#Express 留言本

##开始

```
1.创建目录
2.初始化 package.json
3.初始化Git仓库
4.npm install express
5.创建app.js
6.使用EXpress 的hello Word
7.吧index.html.fabiao.html拷贝到vies文件
8.GET/index.htm;
9.吧 npm i bootstrap;  
10.吧node_module开放出来
11.GEt/fabiao.html;
```

#渲染列表数据
 ```

 1.吧原来的db.json 和comment.js 拷贝到案例根目录
 2.在app.js中加载coment.js去加载使用并且测试
 ```


 ```
 处理表单要添加post
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
```
## 提交到 Github 仓库

1. 在 github 创建一个远程仓库
2. git remote add origin 仓库地址
3. git push origin master

## 开发

```shell
npm install
node app.js
```
