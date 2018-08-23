// 用fs模块来处理文件操作, node模块： 每个模块就是具有处理不同功能的方法的集合
//fs处理文件 querystring 把字符串解析成对象  url模块 把url字符串解析成对象
//http 处理http请求
var fs = require('fs');
var http  =  require('http');
//引入url模块来解析url字符串
var url = require('url');

//创建一个服务器对象
var app = http.createServer(function (req, res) {
    //告诉浏览器用html的方式解析并且编码是utf-8
    res.setHeader('content-type', 'text/html;charset=utf-8');
    //获取到url字符串并且解析成对象
    var url_obj  =  url.parse(req.url);
    console.log(url_obj.pathname);
    //获取到浏览器请求的时候的发送方式
    // console.log(req.method);
    //获取到浏览器发送数据的方式作用就是可以根据不同的发送方式做相应的处理
    if(req.url === "/login"){
        // 返回一个登录页面
        // 把login.html这个文件中的内容读取出来 然后返回给浏览器
        //读取文件， 在fs模块身上有一个readfile方法可以用来读取文件的内容
        fs.readFile('./login.html','utf-8', function (err, data) {
            // console.log(err)  err 表示错误信息
            if(!err){  //err为空 表示读取正确
                // console.log(data)
                //把这些读取的内容返回给浏览器
                res.write(data);
                res.end();
            }
        })
    }
    // console.log(req.url)
    if(url_obj.pathname === '/user_login'){
        res.write('欢迎登录');
        res.end();
    }

})
//监听端口
app.listen(3003)