## 03_Vue-router -- 路由基础介绍

### 什么是前端路由
> 路由根据不同的url地址展现不同的内容或页面
> 前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做
> 之前是通过服务端根据url的不同返回不同的页面实现的

### 什么时候使用前端路由
> 在单页面应用，大部分页面结构不变，只改变部分内容的使用

### 前端路由又什么优点和缺点
优点:用户体验好，不需要每次都从服务端全部获取，快速展现给用户
缺点
* 不利于SEO
* 使用浏览器的前进，后退键的时候回重新发送请求，没有合理地利用缓存
* 单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

### vue-router来构建SPA
router-link 或者 this.$router.push({path:''}) 跳转
router-view 渲染

### 动态路由匹配
对浏览器的BOM history的封装： 
[history.back()] [history.go()] [history.go(0)] 0刷新 1前进 -1后退
history.pushSate("desc","test","/admin")

地址后面跟了# 路由的hash http://localhost:8081/#/good/hello
``` JavaScript
new Router({
	mode:'history'
})
```
直接用地址访问 不用加#
`mode "hash"`

模式  匹配路径 $route.params
/user/:username /user/evan {usrname:'evan'}
/user/:username/post/:post_id /user/evan/post/123 {username:'evan',post_id:123}

### 嵌套路由 同一个页面不同菜单的路由切换
路由嵌套路由
侧边栏 /userinfo/username
一级路由 子路由

配置 嵌套的路由里也需要加<router-view>标签
``` JavaScript
	path:'/good',
	component:good,
	children:[{
		path:'detail',
		name:'detail',
		component:detail
	},{
		path:'image',
		component:image
	}]
```
good.vue里的 router-link /goods/detail /goods/image

### 编程式路由
> 通过js来实现页面的跳转 而不是使用router-link
``` JavaScript
	$router.push("name")
	$router.push({path:"name"}) 传一个对象 $router.params
	$router.push({path:"name?id=123"}) | $router.push({path:"name",query:{a:123}}) 添加参数
	$router.go(1) 类似BOM对象的history对象的 history.go()
	
	页面获取参数 {{$route.query.id}}
```
### 命名路由和命名视图
* 给路由定义不同的名字，根据名字进行匹配
* 给不同的router-view定义名字，通过名字进行对应组件的渲染
	
router-link :to="{name:'cart'}"
动态传id :to="{name:'cart',params:{id:123}}"

命名视图 `router-view name="detail"`
``` JavaScript
components:{
	default:good,
	detail:detail,
	image:image
}

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'good',
			components: {
				default: good,
				detail: goodChild,
				image: image
			}
		},
		{
			path: '/cart/:id',
			component: cart,
			name: 'cart'
		}
	]
})
```
