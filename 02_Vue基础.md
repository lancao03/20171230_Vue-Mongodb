#nodejs和npm的安装和环境搭建
	nodejs运行环境 chrome V8引擎
1.webpack-代码模块化构建打包工具
2.gulp-基于流的自动化构建工具
3.grunt JavaScript世界的构建工具
4.Babel-使用最新的规范来编写js
5.Vue-构建数据驱动的web界面的渐进式框架
6.Express 基于Node.js平台，快速、开放、极简的web开发框架
`npm install -g cnpm --registry=http://registry.npm.taobao.org
淘宝镜像 代理镜像 npm
`npm install -g npm 升级
`cnpm list 查看安装

##vue环境搭建以及vue-cli使用
###Vue多页面应用文件引用
	官网拷贝 script src="https://unpkg.com/vue/dist/vue.js"
	npm安装
###vue-cli构建SPA应用
	npm install -g vue-cli
	vue init webpack-simple demo
	vue init webpack demo2

##vue-cli文件夹的意义
build 打包的配置文件
config webpack配置
src 项目源码
main.js入口文件
static静态资源
.babelrc 配置文件 ES6语法解析 webpack.config配置也可以
.editorconfig 编辑器配置
.gitignore git忽略上传的目录
.postcssrc.js css添加前缀
index.html 入口html页面
package.json 配置 项目描述 脚本 依赖库 开发依赖库 devDependencies  engines 浏览器列表
README.md

核心专注文件：webpack.base.config.js 核心配置
config/index.js 可以和base合并

##vue-cli文件 
CommonJS语法
build
	build.js 构建生产环境
		chalk彩色文案设置 shell文案
		semver 校验版本号是否合法
		process.env.NODE_ENV = 'production' 全局环境设置 production
		path内置的方法 join方法
		sourceMap调试工具 源码映射
		devtool 调试工具
		output 输出
		ora 日志输出插件
		rm 删除命令
		alias 别名
	webpack.base.conf.js
		webpack-merge 配置合并
		UglifyJsPlugin 压缩 uglifyjsplugin
		ExtractTextPlugin 抽取文本 style 插入到index.html里
		OptimizeCSSPlugin
		HtmlWebpackPlugin 打包插件
		CommonsChunkPlugin 抽取公共模块
		CopyWebpackPlugin 复制插件
	webpack执行
		cli模式 直接在shell里输入 webpack会自动去查找webpack.config.js
		函数调用 找到对应的文件 var webpackconfig=require('../webpack.base.conf.js') webpack(webpackconfig)
config
	index.js

##Vue基础语法介绍
1.模板语法 内置模板引擎
	Mustache语法：{{msg}}
	html赋值 v-html=""
	绑定属性 v-bind:id=""
	使用表达式:{{ok>YES:NO}}
	文本赋值 v-text=""
	指令：v-if=""
	过滤器：{{message|capitalize}} v-bind:id="rawId|formatId"
2.Class和Style绑定
	对象语法：v-bind:class="{active:isActive,'text-danger':hasError}"
	数组语法：v-bind:class="[activeClass,errorClass]"
	style绑定-对象语法：v-bind:style="{color:activeColor,fontSize:fontSize+'px'}"
3.条件渲染
	v-if v-else v-else-if v-show v-cloak
4.vue事件处理器
	v-on:click="greet" @click="greet"
	修饰符: @click.stop 阻止冒泡 @click.stop.prevent 阻止默认事件  @click.self 事件本身 不对子元素起作用 @click.once 一次
	@keyup.enter 只需要监听enter事件 在搜索的时候用途很广
5.Vue组件
	全局组件和局部组件(SPA)
	父子组件通讯-数据传递；单向流动~~父组件向子组件传递数据： props 子组件往父组件触发事件 emit
	slot
