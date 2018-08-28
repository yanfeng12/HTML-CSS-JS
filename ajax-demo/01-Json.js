var person = {
    name :"xiaoqiang",
    age : 18,
};
console.log(person)
//key:value
//json是什么？ 就是一种数据交换格式， 必须要按照下面的格式去写
//注意： key值必须是有双引号引起来 value可以是下面任意类型
//     数字（整数或浮点数）
//     字符串（在双引号中）
//     逻辑值（true 或 false）
//     数组（在方括号中）
//     对象（在花括号中）
//     null
// 一个具体的函数或者匿名函数

//JSON
var jstu = '{"name": "xiaoqiang", "age": 12 }';
console.log(jstu);
//使用 后台返回给前台的数据是文本格式，字符串类型
//后台返回的数据如何使用？可以把json格式的字符串转换成对象，就可以通过对象.属性的形式来访问
var  obj = JSON.parse(jstu);
console.log(typeof obj);

//如果有一个对象 转换成json字符串
var obj2 = {
    name :"xiaoqiang",
    age : 18
};
var  obj2_jsonstr = JSON.stringify(obj2);
console.log(obj2_jsonstr);
//总结： 1 json是一种文本格式 你就要按照它的格式来写
//      2 json字符串和对象的转换 转换成对象的目的：取相应的数据(xiaoqiang)
//         JSON.parse 把字符串解析成对象
//         JSON.stringify 把对象转成字符串
//      3 JSON 是一个内置的对象 和Array Date这些对象是一样

