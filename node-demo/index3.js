var  http  = require('http');
var fs = require('fs')
var  app = http.createServer(function (req,res) {
    if (req.url === "/login"){
    	//返回一个登陆页面
    	//把login.html读取出来，然后返回给浏览器
    	//在fs有readfile可以读取文件的内容
    	
    	fs.readFile('./login.html','utf-8',function  (err,data) {
    		console.log(err);
			if (!err){
    			res.write(data);
				res.end();
			}
    	})
    }
});
app.listen(3001);