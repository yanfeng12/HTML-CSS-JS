var  http = require("http");
var  url = require("url");
var  fs = require("fs");
var  querystring = require("querystring");
var  app = http.createServer(function (req,res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    var  url_obj = url.parse(req.url);
	console.log(url_obj);
    if (url_obj.pathname === "/"){
        //返回一个html
        fs.readFile("./load.html","utf-8",function (err,data) {
            if (!err){
                res.write(data);
                res.end();
            }
        });
    };

    if(url_obj.pathname === "/login" && req.method === "POST"){
		var post_data ="";
		req.on("data",function  (chunk) {
			post_data += chunk;
			
		});
		req.on("end",function  () {
			var  post_obj = querystring.parse(post_data)
			if (post_obj.username === "admin" && post_obj.password === "123456"){
				res.write('{"status":0,"message":"欢迎登陆！"}');
				res.end();
			}else{
				res.write('{"status":1,"message":"用户名或者密码错误"}');
				res.end();
			}
		});
    }
	
});
app.listen(3009);
