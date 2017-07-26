<template>
	<div id="comimgSoon">
		<filmItem v-for="film in comingFilms" :film=film></filmItem>
		<more-button flag="coming-soon">更多即将上映电影</more-button>
	</div>
</template>

<script>
	import filmItem from '../../components/home/film-item.vue';
	import moreButton from '../../components/home/more-button.vue';
	import axios from 'axios';
	import {mapGetters} from 'vuex'
	export default {
		name: 'comingSoon',
		data() {
			return {
//				comingFilms:[]
			}
		},
		components: {
			filmItem,
			moreButton,
			axios
		},
		computed: {
			...mapGetters({
				comingFilms: 'comingSoonData'
			})
		},
		methods: {
			toComingSoon: function() {
				this.$router.push('/film/coming-soon')
			}
		},
		created(){
			this.$store.dispatch('fetchComingSoonData', [1,3]);
		}
//		mounted () {
//			let that = this;
//			axios.get('../../../static/json/coming-soon.json')
//				.then(function(response){
//					let films = response.data.data.films;
//					that.comingFilms = films;
//					console.log(response.data.data.films);
//				})
//				.catch(function(err) {
//					console.log(err);
//				})
//		}
	}
</script>

<style scoped>
	#comimgSoon{
		margin-top: 30px ;
		padding: 17px
	}
</style>