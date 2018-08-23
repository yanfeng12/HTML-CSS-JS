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
        fs.readFile("./login.html","utf-8",function (err,data) {
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

});
app.listen(3004);
