/**
 * 功能：做匀速运动
 * @param {Object} obj 需要运动的对象
 * @param {Object} step  步长
 * @param {Object} target  停止的目标点
 * @param {Object} direction 运动的方向，支持left 和 top
 * @param {Object} speed   运动的频率
 * @param {Object} callback 回调函数
 * 
 */
function move(obj, step, target, direction, speed, callback) {
	//给speed默认值
	var speed = speed || 100
	clearInterval(obj.timer) //第一次清除 undefined 不会报错
	obj.timer = setInterval(function() {
		var attrValue = parseInt(getStyle(obj, direction)) + step
		if((step > 0 && attrValue > target) || (step < 0 && attrValue < target)) { // +  attrValue就会一直曾长，会大于target
			attrValue = target
		}
		obj.style[direction] = attrValue + "px"
		if(attrValue == target) {
			clearInterval(obj.timer)
			console.log(callback)
			//如果运行完成，需要做一些操作,callback函数是等到运行结束以后，再执行，回调函数
			callback && callback()
		}
	}, speed)
}
/**
 * 功能：获取样式
 * 注意：不要获取复合样式 例如： font background
 * @param {Object} obj
 * @param {Object} attr
 */
function getStyle(obj, attr) {
	return window.getComputedStyle ? getComputedStyle(obj)[attr] : obj.currentStyle[attr]
}
/**
 * 功能：摆动函数
 * @param {Object} obj 需要摆动的对象
 * @param {Object} direction 摆动方向 支持left和top
 * @param {Object} initValue 初始摆动位置
 * @param {Object} callback  摆动后的回调函数
 */
function waver(obj,direction,initValue,callback) {
	//生成摆动的频率
	var arr = [];
	//数组的下标
	var index = 0
	for(var i = 30; i >= 0; i -= 3) {
		arr.push(i, -i)
	}
	clearInterval(obj.waver)
	obj.style[direction] = initValue + "px"
	obj.waver = setInterval(function() {
		obj.style[direction] = parseInt(getStyle(obj, direction)) + arr[index] + "px"
		index++
		if(index === arr.length) {
			clearInterval(obj.waver)
			callback && callback()
		}
	}, 100)
}
/**
 * 功能：事件绑定
 * @param {Object} obj 需要绑定事件的对象
 * @param {Object} type 事件种类
 * @param {Object} fn 给对象添加的事件函数
 */
function addEvent(obj, type, fn) {
	//例如：Chrome (obj.addEventListener）就是有值，如果是ie低版本，undefined
	if(obj.addEventListener) { //在标准浏览器下支持
		obj.addEventListener(type, fn, false);
	} else if(obj.attachEvent) { // ie就走这里
		//如果是ie obj.attachEvent 就有值，true
		//第一个参数是事件类型，click, ie下没有第三个参数，不支持捕获
		//oBtn.attachEvent("onclick", fn)
		obj.attachEvent('on' + type, fn);
	} else {
		//	oBtn.onclick = fn
		obj['on' + type] = fn;
	}
}
/**
 * 功能：取消事件绑定
 * @param {Object} obj 需要取消绑定事件的对象
 * @param {Object} type 事件种类  取消什么类型的事件
 * @param {Object} fn 需要取消的对象事件方法
 */
function removeEveent(obj, type, fn) {
	if(obj.removeEventListener) {
		//标准浏览器
		obj.removeEventListener(type, fn, false)
	} else if(obj.detachEvent) {
		//ie
		//第一个参数是事件类型，click，没有第三个参数，
		obj.detachEvent('on' + type, fn)
	} else {
		obj['on' + type] = null
	}
}