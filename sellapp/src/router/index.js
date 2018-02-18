import Vue from 'vue'
import Router from 'vue-router'

//引入组件路径
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

//vue引用vue-router
Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	mode: 'history', //为了去除路由跳转时url会加上‘#’号
	routes: [
		{
			path:'/',
			component: goods
		},
		{
			path: '/goods',
			name: 'goods',
			component: goods 
		},
		{
			path: '/ratings',
			name: 'ratings',
			component: ratings 
		},
		{
			path: '/seller',
			name: 'seller',
			component: seller 
		},
	]
})