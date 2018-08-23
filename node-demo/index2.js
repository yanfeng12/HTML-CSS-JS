//require可以引入node模块
var  http = require('http');
//创建一个服务器实例对象
var  app = http.createServer(function (req,res) {
    //req请求，res返回
    res.setHeader("content-type","text/html;charset=utf-8");
    console.log(req.url);
    //url路由 根据不同的请求 返回不同的页面
    if(req.url === '/'){
        res.write("欢迎来到网站首页");
        res.end();
    }else if(req.url === '/admin'){
        res.write("欢迎来到后台管理页");
        res.end();
    }else if(req.url === '/login'){
        res.write("欢迎来到登录页面");
        res.end();
    }else if(req.url === '/register'){
        res.write("欢迎来到注册页");
        res.end();
    }else{
        res.write("404 你访问的页面找不到了");
        res.end();
    }
})
app.listen(5000);
 