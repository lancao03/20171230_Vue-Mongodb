#nodejs启动调试方式
1.通过node命令启动
2.webstorm配置启动入口
	run-> edit configuration -> node.js 新增 设置 JavaScript
3.pm2

###mongo命令
net start mongodb
services.msc

http://localhost:3000/goods?page=1&pageSize=8&sort=1&priceLevel=0

	浏览器JSON格式化 FE助手


1.app.js里配置的是一级路由
	app.use('/users',users)
	router/user.js 
	router.get('/test',(req,res,next){ 
		res.send('test')
	})
2.shell终端 node ./bin/www
	里面有一个可执行文件
3.pm2是以进程的方式执行 可以并行执行多个 ****重点了解****
	pm2 start bin/www
	pm2 list
-----------------------------------------------------
##MongoDB命令常见操作
##cli插入db.insert({name:"aaa"})
	mongo
	show dbs
	use db_demo
	db.createCollection("user")
	db.user.find()
##命令行插入数据库 
	****不能再mongo命令下执行****
	mongoimport -d db_demo -c user --file
-----------------------------------------------------W
##基于Express开发商品列表查询接口
1.安装Mongoose 查询接口 对mongodb的封装 jdbc 提供增删改查的api
2.创建model 实体
3.创建路由

1.创建models文件夹
	//创建模型 安装mongoose 创建Schema视图 -- 表模型 定义数据类型
	var mongoose=require('mongoose')
	var Schema=mongoose.Schema
	
	var productSchema=new Schema({
		"productId":String,
		"productName":String,
		"salePrice":Number,
		"productImage":String
	})
	
	module.exports=mongoose.model('Good',productSchema)
2.创建路由
	var express = require('express')
	var router = express.Router()
	var mongoose = require('mongoose')
	var Goods = require('../models/goods')
	
	var goodSchema = new mongoose.Schema({
		name: String,
		price: Number
	})
	
	//链接MongoDB数据库
	mongoose.connect('mongodb://127.0.0.1:27017/product')
	
	mongoose.connection.on('connected', function() {
		console.log('mongodb connected  success')
	})
	
	mongoose.connection.on('erro', function() {
		console.log('mongodb connected fail')
	})
	
	mongoose.connection.on('disconnected', function() {
		console.log('mongodb connected disconnected')
	})
	
	router.get('/', function(req, res, next) {
		res.send('hello good list')
	})
	
	module.exports = router

	require默认会先加载node_modules
	module.exports 匿名输出
	module.exports.user 带名字的输出

##mongo命令
mongod --dbpath D:mongo\data\db  

##接口
exec

http://localhost:3000/goods?page=1&pageSize=8&sort=1
##排序功能

##滚动插件
cnpm install vue-infinite-scroll --save

##