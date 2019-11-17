import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import First from './components/first.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: First
			
		},
		{
			path: '/history',
			component: () => import('./components/history.vue')
		},
	]
})