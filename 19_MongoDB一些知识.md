#MongoDB安装配置
1.安装
	https://pan.baidu.com/s/1mhPejwO
	mongodb-win32-x86_64-2008plus-ssl-3.6.1-signed
2.配置 data/etc/log mongo.log
	mongo.conf
	#数据库路径
	dbpath=D:\MongoDB\data\db
	#日志输出文件路径
	logpath=D:\MongoDB\logs\mongodb.log
	#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
	logappend=true
	#启用日志文件，默认启用
	journal=true
	#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
	quiet=false
	#端口号 默认为27017
	port=27017
	#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
	storageEngine=mmapv1
	
	##安装本地服务
	mongod --config D:\MongoDB\etc\mongo.conf --install --serviceName MongoDB
	##配置环境变量 bin
3.启动数据库
	mongo -- show dbs -- use dumall
	http://localhost:27017
	show tables(查看数据库里的集合) db.users.find() (查找users表里所有的数据)
	db.users.findOne() (查找users表里单条数据，函数名大小写敏感)
4.可视化工具 Mongo Robo
5.数据库角色
	(1).数据库用户角色
	针对每一个数据库进行控制。
	read :提供了读取所有非系统集合，以及系统集合中的system.indexes, system.js, system.namespaces
	readWrite: 包含了所有read权限，以及修改所有非系统集合的和系统集合中的system.js的权限.
	
	
	(2).数据库管理角色
	每一个数据库包含了下面的数据库管理角色。
	dbOwner：该数据库的所有者，具有该数据库的全部权限。
	dbAdmin：一些数据库对象的管理操作，但是没有数据库的读写权限。（参考：http://docs.mongodb.org/manual/reference/built-in-roles/#dbAdmin）
	userAdmin：为当前用户创建、修改用户和角色。拥有userAdmin权限的用户可以将该数据库的任意权限赋予任意的用户。

6.新增
	db.users.insert({name:""})

7.查找
	db.users.find() 
	db.users.find({age:20})//条件查询 [>,>=,<,<=,!=,=] great litter equal [$gt,$gte,$lt,$lte,$ne]
	db.users.find({age:{$gt:18}}) 查找年龄大于18的
	[$exists] 是否存在某个字段
	db.users.find(number:{$exists:true}) 查找存在number字段的集合
	[$in] $in:["beijing","shagnhai"] 在某个范围 [$nin] 不在某个范围 $nin:["beijing","shanghai"]
	[$or] 或 用户在上海或者用户年满20 $or:[{"company.address":"shanghai"},{"age":20}]
	MongoDB的增删改查 http://www.cnblogs.com/wolf-sun/p/5539094.html#3441690

8.更新 update 整体更新 局部更新
	$inc increase 在原来的基础上加上某个值
		db.user.update({"age":29},{$inc:{"age":-9}}) 年龄在29的基础上-9
	$set
		db.user.update({"age":29},{$set:{"age":20}}) 将年龄29设置为20
	update方法第三个参数，bool类型参数，默认为false，如果为true，则标识如果不存在则创建的操作。
	批量更新 将第四个参数设置为true
