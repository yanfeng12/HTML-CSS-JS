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
        fs.readFile("./ajax.html","utf-8",function (err,data) {
            if (!err){
                res.write(data);
                res.end();
            }
        });
    };
	if (url_obj.pathname === "/ajax.js"){
		//返回一个html
		fs.readFile("./ajax.js","utf-8",function (err,data) {
			if (!err){
				res.write(data);
				res.end();
			}
		});
	};
    //验证用户名是否存在
    if(url_obj.pathname === "/getNews" && req.method === "GET"){
		var arr = '[' +
				'{"title":"习近平出席国家科学技术奖励大会1","time":"'+new Date().toLocaleDateString()+'"},' +
				'{"title":"习近平出席国家科学技术奖励大会2","time":"'+new Date().toLocaleDateString()+'"},' +
				'{"title":"习近平出席国家科学技术奖励大会3","time":"'+new Date().toLocaleDateString()+'"},' +
				'{"title":"习近平出席国家科学技术奖励大会4","time":"'+new Date().toLocaleDateString()+'"}' +
				']';
		res.write(arr);
		res.end();
    }
});
app.listen(3011);