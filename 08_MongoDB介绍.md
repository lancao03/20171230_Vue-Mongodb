## windows平台下MongoDB安装和环境搭建 非关系型数据库
1. 高可扩展性
2. 分布式存储
3. 低成本
4. 结构灵活

### 如何安装
1. 下载安装包或者压缩包
2. 添加db存储和日志存储文件夹
3. 添加服务、配置环境变量、启动Mongo
[https://pan.baidu.com/s/1mhPejwO](https://pan.baidu.com/s/1mhPejwO)

### 启动mongodb服务 bin目录下有个mongod的exe可执行文件
	mongod --dbpath D:\mongodb\data\db
	mongod --dbpath d:\mongodb\data\db --journal

	storageEngine 存储引擎

## webstrom 启动server服务
	"D:\Program Files\JetBrains\WebStorm 2017.3.1\bin\runnerw.exe" "D:\Program Files\nodejs\node.exe" E:\基于Vue的站点\imoocMall\server\bin\www

>mongo.log
	# 数据库路径
	dbpath=D:\MongoDB\data\db
	# 日志输出文件路径
	logpath=D:\MongoDB\logs\mongodb.log
	# 错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
	logappend=true
	# 启用日志文件，默认启用
	journal=true
	# 这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
	quiet=false
	# 端口号 默认为27017
	port=27017
	# 指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
	storageEngine=mmapv1

	在mongoDB的bin目录下执行以下命令
	mongod -f D:\MongoDB\ect\mongo.conf

> 安装到windows 本地服务里
	mongod --config D:\MongoDB\etc\mongo.conf --install --serviceName MongoDB


	mongod --config D:\MongoDB\etc\mongo.conf --httpinterface
	
	C:\Program Files\MongoDB\Server\3.4\bin F:\MongoDB\etc
	mongod --config F:\MongoDB\etc\mongo.conf --install --serviceName MongoDB

> 删除服务
	mongod --config D:\MongoDB\etc\mongo.conf --remove

> 安装服务后配置环境变量 我的电脑-属性-高级系统设置-环境变量-path ;d:/mongodb/bin
就可以在命令行任意目录下 输入mongo

#### 启动MongoDB服务
	net start mongodb
	services.msc

#### Mongo Cli
#### 命令行创建数据库 
	use imoocmall
	db.goods.insert({id:'101',name:"m16","salePrice":2499})
	
	//命令行执行查询一个数据
	use dumall
	db.users.findOne()
	函数名大小写敏感，执行结果已经进行了格式化输出

## MongDB创建用户
1. 创建管理员
2. 授权认证
3. 给使用的数据库添加用户

	通过mongo命令启动
	配置环境变量后通过[mongo]启动
	mongod --config d:\mongodb\etc\mongo.conf

## 授权 --auth
mongod --config D:\MongoDB\etc\mongo.conf --auth

## 授权步骤
1. mongo
2. show dbs
3. use admin
4. db.createUser({user:'admin',pwd:'admin',roles:[{role:'root'}]})
5. db.auth('admin','admin')

## MongoDB基本语法
1. 数据库对比
	SQL mongo
	database 				database 	数据路
	table 					collection 	数据表、集合
	row 					document 	数据记录行、文档
	column 					field 		数据字段、域
	index 					index  		索引
	table joins 						表连接，MongoDB不支持
	primary key 			primary key 逐渐 MongoDB自动将_id字段设置为主键
2. 基本语法
	*插入文档
	*更新文档
	*删除文档
	*查询文档
	db.createCollection('goods',{'usename':'admin','pwd':'123'})
	db.createCollection(goods,{usename:admin,pwd:123})

## 设计数据模型
> schema model docments 模式模型和文档
	mongoose mongodb 
1. Schema 模式定义 对数据库集合的字段定义类型，需要和数据表的字段名保持一致
	var goodSchema=new mongoose.Schema({
		name:String,
		price:Number
	})
2. Model 编译模型 定义模式的名称，schema
	var goodsModel=mongoose.model({
		'movie',goodSchema
	})
	module.exports=Movie
3. document文档实例化
	var movie=new Movie({
		title:'dd',
		doctor:'dd',
		year:2018
	})
	movie.save(function(err){
		if(err) return handleError(err)
	})
4. 数据批量查询 exec find
	var Movie=require('./models/movie')
	app.get('/',function(req,res){
		Movie.find({})
			 .exec(function(err,movies){
			 	res.render('index',{
			 		title:"首页",
			 		movies:movies
			 	})
			 })
	})
5. 单条数据删除
	.remove({_id:id})

## 开发后端逻辑 views models schemas 

----
	一些MongoDB入门的基础知识
----

## MongoDB 开源的NoSQL数据库
## lamp = linux mysql apache php
>免费开源 技术支持 

## 课程目的
1. 熟悉MongoDB数据库各种概念
2. 学会MongoDB的搭建
3. 熟悉MongoDB的使用
4. 简单的运维

## 课程面向对象
1. 热爱学习的小白
2. 使用过一段时间MongoDB的工作人员

## MongoDB概述
1. MongoDB概念
	MongoDB mongo 索引 集合 复制集 分片 数据均衡
2. 学会MongoDB的搭建- 
	部署数据库服务 --搭建简单的单机服务、搭建具有冗余容错功能的复制集、搭建大规模数据集群、完成集群的自动部署
3. 熟悉MongoDB的使用 -- 
	最基本的文档读写更新删除、各种不同类型的索引的创建与使用、复杂的聚合查询、
	对数据集合进行分片，在不同分片间维持数据均衡、数据备份、数据迁移

## 简单运维
部署MongoDB集群
处理多种常见的故障
	单节点失效，如何恢复工作；数据库意外被杀死如何进行数据恢复；数据库发生拒绝服务时如何排查原因；数据库磁盘快满时如何处理

初级 -- 背景知识 基本操作
中级 -- 常见的部署操作、简单运维
高级 -- 介绍集群及大型集群的运维经验寄mongoDB的实现原理，常见问题及解决方法

	如何运维一个几十T甚至上百T的数据库
	如何位置几十个甚至上百个节点的数据库的均衡

## MongoDB课程概述
1. 几个重要网站
	官方网站 www.mongodb.org 安装包下载、使用文档
	www.mongodb.com
	http://docs.mongoing.com/
	http://github.com/mongodb
	jira.mongodb.org
	mongodb-user

## 数据库 -- 
1. 有组织的存放数据
2. 按照不同的需求进行查询

## 数据库分类
1. SQL数据库：支持SQL语言的数据库 oracle mysql 横向扩展困难
2. NoSQL数据库：不支持SQL语言的数据库 Redis MongoDB
	SQL数据库 			NoSql
	实时一致性 			简单便捷
	事务 				方便扩展
	多表联合查询 		更好的性能

## MongoDB特色
1. 无数据结构限制
	没有表结构的概念，每条记录可以又完全不同的结构
	业务开发方便快捷
	sql数据库需要事先定义表结构再使用
	{name:"小明",sex:"男"}
	{name:"小红",address:"上海"}
	{name:"小兰",home:[{"山东"},{"上海"}]}
2. 完全的索引支持
	redis key-value
	hbase的单索引 二级索引需要自己实现
	单键索引、多键索引{x:1,y:1}
	数据索引:["apple","lemon"]
	全文索引:"i am a litter bird"
	地址位置索引:2D
3. 方便的冗余与扩展
	复制集保证数据安全
	分片扩展数据规模
4. 良好的支持
	完善的文档
	齐全的驱动支持

## 课程相关的工具
> MongoDB环境：64位Linux
ssh工具：xshell
文本编辑器:vim notepad++
