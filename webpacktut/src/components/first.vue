<template>
	<div id="validation">
		<div class="container">
			<form v-on:input="counterCheck">

				<div class="name">
					<label for="card-owner">Fill in the name</label>
					<input type="text" name="username" id="card_owner" v-model="card.cardowner" v-on:input="onValidName">
					<p>{{ card.messageOwner }}</p>
				</div>

				<div class="number">
					<label for="card-number">Fill in the number</label>
					<input type="text" name="number" id="card-number" v-model="card.cardnumber" v-on:input="onValidNumber">
					<p>{{ card.messageNumber }}</p>
				</div>


				<div class="cv">
					<label for="card-cv">Fill in the CV</label>
					<input type="text" name="cv" id="card-cv" v-model="card.cardcv" v-on:input="onValidCv">
					<p>{{ card.messageCv }}</p>
				</div>

				<div class="quarters">
					<div class="quarter">
						<label for="card-quarter">Fill in the Quarter</label>
						<input type="text" name="quarter" id="card-quarter" v-model="card.cardquarter" v-on:input="onValidQuarter">
						<p>{{ card.messageQuarter }}</p>
					</div>
				</div>

				


				<br>
				<button type="submit" id="btn" disabled>btn</button>
			</form>
		</div>
		<router-link to="/history">history</router-link>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		computed: {
			...mapState(['card', 'counter'])
		},
		methods: {
			...mapMutations(['counterCheck']),
			onValidName: function() {
				let cardLetter = document.getElementById('card_owner')
				const letterRegister = /[^a-zA-Z]/g
				if(letterRegister.test(cardLetter.value) || cardLetter.value.length < 4) {
					this.card.messageOwner = "Username should contain only english letters. Minimum 4 letters. Space is prohibited"
					cardLetter.classList.add('red-frame')
					cardLetter.classList.remove('green-frame')
					this.counter.nameField = 0

				}
				else {
					this.card.messageOwner="Suitable"
					this.counter.nameField = 1
					cardLetter.classList.remove('red-frame')
					cardLetter.classList.add('green-frame')
				}
				
			},

			onValidQuarter: function() {
				let cardQuarter = document.getElementById('card-quarter')
				let numberRegister = /[0-9]/g
				if(!numberRegister.test(cardQuarter.value) || this.card.cardquarter.length > 16)  { 
					this.card.cardquarter = this.card.cardquarter.slice(0, -1)
				}
				else {
					this.card.outputQuarter = String(cardQuarter.value).match(numberRegister)
					this.card.cardquarter = this.card.outputQuarter.join('')
					cardQuarter.classList.add('red-frame')
					cardQuarter.classList.remove('green-frame')
					this.card.messageQuarter = "Quarter should contain only 16 digits"
					this.counter.quarterField = 0
				}
				if(this.card.cardquarter.length == 16) {
					cardQuarter.classList.remove('red-frame')
					cardQuarter.classList.add('green-frame')
					this.card.messageQuarter = "Suitable"
					this.counter.quarterField = 1
				}
			},

			onValidNumber: function() {
				let cardNumber = document.getElementById('card-number')
				let numberRegister = /[0-9]/g
				if(!numberRegister.test(cardNumber.value) || this.card.cardnumber.length > 14) {
					this.card.cardnumber = this.card.cardnumber.slice(0, -1)
				}
				else {
					this.card.outputNumber = String(cardNumber.value).match(numberRegister)
					this.card.cardnumber = this.card.outputNumber.join('')
					cardNumber.classList.add('red-frame')
					cardNumber.classList.remove('green-frame')
					this.card.messageNumber = "Number should contain only 14 digits"
					this.counter.numberField = 0
				}
				if(this.card.cardnumber.length == 14) {
					cardNumber.classList.remove('red-frame')
					cardNumber.classList.add('green-frame')
					this.card.messageNumber = "Suitable"
					this.counter.numberField = 1
				}
			},

			onValidCv: function() {
				let cardCv = document.getElementById('card-cv')
				let numberRegister = /[0-9]/g
				if(!numberRegister.test(cardCv.value) || this.card.cardcv.length > 3) {
					this.card.cardcv = this.card.cardcv.slice(0, -1)
				}
				else {
					this.card.outputCv = String(cardCv.value).match(numberRegister)
					this.card.cardcv = this.card.outputCv.join('')
					cardCv.classList.add('red-frame')
					cardCv.classList.remove('green-frame')
					this.card.messageCv = "CV should contain only 3 digits"
					this.counter.cvField = 0
				}
				if(this.card.cardcv.length == 3) {
					cardCv.classList.remove('red-frame')
					cardCv.classList.add('green-frame')
					this.card.messageCv = "Suitable"
					this.counter.cvField = 1
				}
			},

		},
		
	}


</script>

<style lang="scss" scoped>
	.red-frame {
		outline-color: red;
	}
	.green-frame {
		outline-color: green;
	}
	#btn {

	}
</style>