//综合实例：登陆验证
//1.创建一个服务器
//2.路由知识   /login  根据不同的请求返回不同的数据
//3.如何返回一个html网页，要有一个登陆的展示页面
//4.url querystring
//5.数据发送方式  get/post   req.method
var  http = require('http');
var  url = require('url');
var  fs = require('fs');
var  querystring = require('querystring');
var  app = http.createServer(function (req,res) {
    //设置返回内容的格式和编码
    res.setHeader('content-type', 'text/html;charset=utf-8');
    //把字符串解析为对象
    var  urlObj = url.parse(req.url);
    if (urlObj.pathname === '/login'){
        //返回一个网页
        fs.readFile("./login2.html","utf-8",function (err,data) {
            if (!err){
                res.write(data);
                res.end();
            }
        });
    }
    if(urlObj.pathname === '/user_login' &&req.method === "GET"){
        //验证用户名是否正确\
        var  query_data = querystring.parse(urlObj.query);
        if (query_data.username === "admin" && query_data.password === "123456"){
            res.write('欢迎登录');
            res.end();
        }else{
            res.write('用户名或者密码错误<a href="/login">重新登陆</a>');
            res.end();
        }

    }
    if(urlObj.pathname === '/user_login' &&req.method === "POST"){
        var post_data = "";
        //要获取post方式发送过来的数据要监听两个事件
        //data事件作用：当浏览器有数据发送过来时就会触发data事件
        req.on('data',function (chunk) {
            //chunk:表示数据块，浏览器把数据切块分块发送
            post_data += chunk;
            // console.log(post_data);
        });
        req.on('end',function () {
            //数据接收完成后触发
            console.log(post_data);
            console.log("数据接收完成")
            var  post_obj = querystring.parse(post_data)
            if (post_obj.username === "admin" && post_obj.password === "123456"){
                res.write('欢迎登录');
                res.end();
            }else{
                res.write('用户名或者密码错误<a href="/login">重新登陆</a>');
                res.end();
            }
        })
    }

});
app.listen(3005);

/*
* 总结：
* 1。get和post区别。get发送的数据在url里面，查询字符串。post发送的数据在请求头header里面，formdata。
* 2。get和post应用场景。get用来做数据查询，post涉及到数据库的修改。
* 3.表单name属性。必须要有name属性，后台才能接收到数据。
* 4.前台用get方式发送，后台用get方式接收数据。
* 5.req.method。可以获取前台发送方式。
* */