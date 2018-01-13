# 基于Vuex改造登录和购物车数量

### Vuex基本介绍
1. 什么是Vuex
	Vuex是一个专门为vue.js应用程序开发的状态管理模式
2. 为什么要用Vuex
	当我们构建一个中大型的单页应用程序时，Vuex可以更好的帮助我们在组件外部统一管理状态
	类似 window的全局变量
3. Vuex的核心概念
##### State -- State是唯一的数据源；单一的状态树；
		const Counter={
			template:'<div>{{count}}</div>',
			computed:{
				count(){
					return this.$store.state.count
				}
			}
		}
##### Getters -- 通过Getters可以派生出一些新的状态
		const store=new Vuex.Store({
			state:{
				todo:[
					{id:1,text:'11',done:true},
					{id:2,text:'22',done:false}
				]
			},
			getters:{
				doneTodos:state=>{
					return state.todos.filter(todo => todo.done)
				}
			}
		})
##### Mutations -- 更改Vuex的store中状态唯一的方法就是提交mutation;必须是同步的不能包含异步操作
		const store=new Vuex.Store({
			state:{
				count:1
			},
			mutaions:{
				increment (state){
					//更改状态
					state.count++
				}
			}
		})
		>触发这个方法 store.commit('increment')
##### Actions -- Action提交的是mutation，而不是直接更改状态；Action可以包含任意异步操作
	const store=new Vuex.Store({
		state:{
			count:0
		},
		mutations:{
			increment(state){
				state.count++
			}
		},
		actions:{
			increment(context){
				context.commit('increment')
			}
		}
	})
##### Modules -- 面对复杂的应用程序，当管理状态比较多时，我们需要将Vux的store对象分割成模块 modules
	const moduleA={
		state:{},
		mutations:{},
		actions:{},
		getters:{}
	}
	const moduleB={
		state:{},
		mutaions:{},
		actions:{}
	}
	const store=new Vuex.Store({
		modules:{
			a:moduleA,
			b:moduleB
		}
	})

####项目结构
	index.html
	main.js
	api
		抽取api请求
	components
		app.vue
	store
		index.js 我们组装模块并导出store的地方
		actions.js 根级别的action
		mutations.js 根级别的mutation
		modules
			cart.js 购物车模块
			product.js 产品模块

#### Vuex基本语法
1. 固定格式 new Vuex.Store({ state:''})
2. 定义mutations 触发 [commit] state 状态
3. 定义actions 触发 [dispatch] context上下文
4. getter 类似计算属性 重新定义了一个全新的状态值 取：[this.$store.getters.userName]

#### Vuex应用到购物车中
1. 安装vuex [cnpm install vuex --save]
2. main.js中 [import Vuex from 'vuex'] [Vue.use(Vuex)]
3. 存store [this.$store.commit('updateNickName',nickName)] 
        取store [this.$store.state.nickName]
        通过计算属性来实时获取 在购物车数量变化时实时改变store的值
4. 除了用计算属性还有vuex提供的另外的方法 
	import { mapState } from 'vuex'
	computed:{
		...mapState(['nickName', 'cartCount'])
	}
