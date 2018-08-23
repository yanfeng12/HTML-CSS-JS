//1.如何使用node模块
var  http = require('http');
//console.log(http);
//实例化http对象
var  app = http.createServer(function (req,res) {
    //1 一次http请求就有一次http响应
    //2 请求的信息放在req里面
    //3 响应的信息放在res里面
    res.write("hello world!");
    res.end();
})
//监听端口
app.listen(3000);