import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		card: {
			cardowner: '',
			messageOwner: '',
			messageQuarter: '',
			messageCv: '',
			outputCv: null,
			cardcv: '',
			cardnumber: '',
			messageNumber: '',
			outputNumber: null,
			outputQuarter: null,
			cardQuarter: null,
			cardquarter: '',
		},
		counter: {
			nameField: null,
			numberField: null,
			cvField: null,
			quarterField: null
		}
	},
	mutations: {
		counterCheck(state) {
			let btn = document.getElementById('btn')
			btn.disabled = true
			let checkVar = state.counter.nameField + state.counter.numberField + state.counter.cvField + state.counter.quarterField
			if(checkVar === 4) {
				btn.disabled = false
			}
			console.log(checkVar)
		}
	}
})