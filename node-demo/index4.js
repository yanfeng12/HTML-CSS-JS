//url模块 把字符串解析成对象
var  url = require('url');
var  urlStr = "http://nodeing.com/search?q=html&name=xiaoqiang";
var  urlObj = url.parse(urlStr);
// console.log(urlObj);
// query: 'q=html',发送请求的时候，发送到后台的数据
//  pathname: '/search',  路由
// console.log(urlObj.query);
// console.log(urlObj.pathname);
//需求： q=html&name=xiaoqiang 想得到里面html， xiaoqiang 这两个值？
//用querystring模块 parse方法
var  str = "q=html&name=xiaoqiang";
var  querystring = require('querystring');
var  strObj = querystring.parse(str);
console.log(strObj);
console.log(strObj.q);
console.log(strObj.name);
