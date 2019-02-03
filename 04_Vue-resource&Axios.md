>主要介绍异步请求插件，对Vue Resource以及Axios等两种主流插件进行讲解，主要的功能包括GET、POST、JSONP、全局拦截器（interceptors）、全局路径（root）等知识点。

## vue-resource
异步请求插件和ajax相似
1. cdn方式引用 https://cdn.jsdelivr.net/vue.resource/1.3.1/vue-resource.min.js
2. npm | npm install vue-resource --save

#### vue-resource 的请求API是按照REST风格来设计的，它提供了7种请求API
1. get(url,[options])
2. head(url,[options])
3. delete(url,[options])
4. jsonp(url,[options])
5. post(url,[body],[options])
6. put(url,[body],[options])
7. patch(url,[body],[options])

get获取 post提交
url [string] 请求的URL
method [string] 请求的HTTP方法，例如 GET POST或其他的HTTP方法
body [object/Formatastring] request body
params [object] 请求的URL参数对象
headers [object] 请求的URL参数对象
timeout [number] 单位为毫秒的请求超过时间 0表示无超时时间
before [funciton(request)] 请求发送前的处理函数，类似jQuery的beforeSend函数
progress [function(event)] ProgressEvent回调处理函数
credentials [boolean] 表示跨域请求是否需要使用凭证
emulateHTTP [boolean] 发送PUT PATCH DELETE请求时以HTTP POST的方式发送，并设置请求头 X-HTTP-Method-Override

#### 全局拦截器 interceptors
eg：请求发送前load
``` JavaScript
Vue.http.interceptors.push((req,next)=>{
		//请求发送前的处理函数
		next((res)=>{
			//请求发送后的处理逻辑
			//根据请求的状态res参数会返回successCallback或errorCallback
			return res
		})
	})
```
#### 案例
1. GET请求
2. POST请求
3. 全局拦截器interceptors的使用
``` JavaScript
	Vue.http.interceptors.push((req, next) => {
		console.log('request init')
		next(function(res) {
			console.log('response init')
			return res
		})
	})
	
	http:{
			root:'http://192.168.1.109:8080/基于Vue的站点/imoocMall/'
		},
```

#### Axios基础介绍
1. cdn http://unpkg.com/axios/dist/axios.min.js
2. npm | npm install axios --save

#### Axios八个API
1. axios.request(config)
2. axios.get(url[,config])
3. axios.delete(url[,config])
4. axios.head(url[,config])
5. axios.options(url[,config])
6. axios.post(url[,data[,config]])
7. axios.put(url[,data[,config]])
8. axios.patch(url[,data[,config]])

#### Axios Demo
``` JavaScript
axios.get('/user/123')
axios.get('/user/123/premissions')
axios.all([getUserAccount(),getUserPermissions()])
.then(axios.spread(function(acc,perms){
	//	获取两个接口
}))
```
#### Axios GET
``` JavaScript
	axios.get('package.json', {
		params: {
			userid: '11'
		},
		headers: {
			token: 'jack'
		}
	})
	.then((res) => {
		this.msg = res.data
	})
	.catch((err) => {
		console.log('error init' + err)
	})
```
#### Axios POST
``` JavaScript
	axios.post('package.json', {
		userid: '22'
	}, {
		headers: {
			token: 'tom'
		}
	}).then((res) => {
		this.msg = res.data
	}).catch((err) => {
		console.log('err init ' + err)
	})
```
#### Axios HTTP
``` JavaScript
	axios({
		url: 'package.json',
		method: 'get',
		params: {
			userId: '1122'
		},
		headers: {
			token: 'http-test'
		}
	}).then((res) => {
		this.msg = res.data
	})
```
get和post传递参数的方式不同 get-params post-data

#### 全局拦截器
1. 请求拦截器
``` JavaScript
	axios.interceptors.request.use((conf) => {
		console.log('request init')
		return conf
	})
```
2. 响应拦截器
``` JavaScript
	axios.interceptors.response.use((res) => {
		console.log('response init')
		return res
	})
```
