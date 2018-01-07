#Node.js在Linux下安装和环境搭建
1.wget  https://npm.taobao.org/mirrors/node/v6.10.3/mpde-v6.10.3-linux-x64.tar.xz
2.xz -d node-v6.10.3-linux-x64.tar.xz/tar -xzvf node-v6.10.3-linux-x64.tar.gz
3.tar -xvf node-v6.10.3-linux-x64.tar
4.ln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node
5.ln -s /node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm

##node基础
1.基于Chrome V8引擎 可扩展的高性能服务器
2.单线程
3.使用JavaScript开发后端代码
4.非阻塞的io

###node基础编程
1.演示Common规范
2.创建一个HTTP Server
3.创建一个Web容器，可访问到HTML内容
4.Http模块客户端的演示

####CommonJS规范
1.输出module.exports 
2.require('./user') 通过require加载
	require已经安装到了node里了
	nodejs的引擎是统一的，支持ES6的语法 任何人访问都没问题
	浏览器的支持性不同，所以需要通过babel插件进行转义编译

export default

	//暴露一个对象
	module.exports={
		userName:"Jack",
		sayHello(){
			return "hello"
		}
	}
	
	//对象的key进行输出
	exports.userName="Tom"
	exports.sayHello=()=>{
		return "hello"
	}

###nodejs官网 http://nodejs.cn/api
``child processes 执行脚本 ； console；
``crypto加密；debugger调试器；fs文件系统 对文件读写 追加 rename重命名
``module模块 ； path路径 全局的变量，用到哪就等于当前路径  __dirname 那个位置所在的目录
``url 对url进行格式化转发 resolve解析url：把一种web浏览器解析超链接的方式吧一个目标url解析成相对于一个基础的URL
``util 工具类 inspect 字符串转换为对象
``http

#### http.Server类

response.statusCode 状态码
req.url 只能获取相对路径 取不到完整路径

	Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=12',
	  query: 'a=12',
	  pathname: '/index.html',
	  path: '/index.html?a=12',
	  href: '/index.html?a=12' }
  
#### http.clientRequest类
Node API
http
URL
FS
Debugger
HTTP
server

##nodejs是服务端语言 可以被别人调用 就成为服务端
##调用其他的服务就是客户端 client

##搭建基于Express框架运行环境
1.安装express generator生成器
``cnpm install -g express-generator
2.通过生成器自动创建项目
``epress server
3.配置分析
``morgan 日志输出 
	cookie-parse
	body-parse 返回值进行转换 bodyParse.json bodyParse.urlencoded
	path.join(__dirname,'public')
	express.static()设置静态访问路径
	app.use('view',path.join(__dirname,'views')) //设置静态访问目录

	app.use(express.static(path.join(__dirname, '/public')));
	这句话的意思就是把public目录设置为服务器静态目录，可以自由读取

##使用html模板 EJS
	app.engine('.html',ejs.__express);
	app.set('view engine','html');



