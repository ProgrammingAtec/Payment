<template>
	<div>
		<b><i><p>History >> Здесь может быть абсолютная любая часть чего-угодно. Просто сделал ради демонстрации lazy loading</p></i></b>
		<ul>
			<li v-for="jam in jams">{{ jam }}</li>
		</ul>
		<router-link to="/">Go back</router-link>
	</div>
</template>


<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				jams: {
					first: 'one',
					second: 'two',
					third: 'three'
				},
			}
		}
	}
</script>

<style>
	
</style>