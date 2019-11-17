import './styles/main.scss'
import store from './store/index.js'
import router from './router'
window.Vue = require('vue/dist/vue.js')

Vue.component('first-component', require('./components/first.vue'))
Vue.component('second-component', require('./components/confirmed.vue').default)

const app = new Vue({
	store,
	router,
	el: '#app',
	
	data: {
		
	}
})