let http = require('http')
let util = require('util')

http.get('http://www.imooc.com/index/getstarlist', (res) => {
	let data = ''
	
	//监听
	res.on('data', (chunk) => {
		data += chunk
	})
	
	//监听
	res.on('end', () => {
		let result = JSON.parse(data)
		result = util.inspect(result)
		console.log('result:' + result)
	})
})