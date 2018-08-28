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
        fs.readFile("./ajax-index.html","utf-8",function (err,data) {
            if (!err){
                res.write(data);
                res.end();
            }
        });
    };

    //验证用户名是否存在
    if(url_obj.pathname === "/getdata"){
        //正确的1admin
		// console.log(querystring.parse(url_obj.query).username);
        if (querystring.parse(url_obj.query).username === 'admin'){
			// console.log("用户名已经存在");
            res.write('{"status":1,"message":"用户名已经存在"}');
			res.end();
        }else{
			// console.log("恭喜你可以注册");
            res.write('{"status":0,"message":"恭喜你可以注册"}');
			res.end();
        }
    }
});
app.listen(3008);
