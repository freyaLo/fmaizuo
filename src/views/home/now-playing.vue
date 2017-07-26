<template>
	<div id="nowPlaying">
		<filmItem v-for="film in playingFilms" :film=film></filmItem>	
		<more-button flag="now-playing">更多热映电影</more-button>
	</div>
</template>

<script>
	import filmItem from '../../components/home/film-item.vue';
	import moreButton from '../../components/home/more-button.vue';
//	import axios from 'axios';
	import {mapGetters} from 'vuex'
	
	export default {
		name: 'now-playing',
		data() {
			return {
//				playingFilms: []
			}
		},
		computed: {
			...mapGetters({
				playingFilms: 'nowPlayingData'
			})
		},
		components: {
			filmItem,
			moreButton
		},
		created(){
			this.$store.dispatch('fetchNowPlayingData', [1,5]);
		}
//		,
//		mounted () {
//			let that = this;
//			axios.get('../../../static/json/now-playing.json')
//				.then(function(response){
//					let films = response.data.data.films;
//					that.playingFilms = films;
//					console.log(response.data.data.films);
//				})
//				.catch(function(err) {
//					console.log(err);
//				})
//		}
	}
</script>

<style>
	#nowPlaying{
		padding: 18px;
	
	}
</style>