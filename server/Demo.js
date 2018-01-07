let user = require('./User')
//console.log(`userame:${user.userName},say ${user.sayHello()}`)

//加载http模块 url模块 util模块
let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((req, res) => {
	debugger
	res.statusCode = 200
	res.setHeader('Content-Type', 'text-plain;charset=utf-8')

	//用于调试，把对象打印成字符串
	let urlStr = util.inspect(url.parse(req.url))
	
	console.log(req.url)//demo.html?a=12
	console.log("parse:"+url.parse(req.url))//[object]
	console.log('inspect:'+util.inspect(url.parse(req.url)))[url:{
		
	}]

	res.end(urlStr)
})
server.listen(3000, '127.0.0.1', () => {
	console.log("server listen http://localhost:3000")
})