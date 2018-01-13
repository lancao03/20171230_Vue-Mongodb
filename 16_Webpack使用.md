# Webpack的使用

	基于模块化打包工具 grunt gulp
	JS css压缩合并 版本号替换
	grunt 基于配置 grunt.config.js
	gulp 基于编程 

	webpack解析文件，loader加载器 所有的文件都变成模块
	css-loader sass-loader url-loader file-loader 处理非JS类型的文件

1. html-webpack-plugin 生成html文件 后台动态渲染 模板
2. extract-text-webpack-plugin 把css文件抽取出来放到style里面
3. UglifyJsPlugin/webpack.optimize.UglifyJsPlugin() 压缩代码
4. CommonsChunkPlugin/new webpack.optimize.CommonsChunkPlugin() 抽取公共模块 多个页面公用的文件抽取出来
5. clean-webpack-plugin 打包之前删除文件夹 清除文件
6. copy-webpack-plugin 文件复制

#### loader
	解析js文件并输出
1. css-loader -- 解析css文件
2. sass-loader/less-loader/node-sass -- 解析sass、less、scss、stylus文件
3. file-loader/url-loader -- 解析图片 png jpg svg gif
4. postcss-loader/autoprefixer -- 给css添加前缀

#### 创建一个基于vue的发布到npm上的插件 vue-toast
1. npm init

