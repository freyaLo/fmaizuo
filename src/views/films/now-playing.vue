<template>
	<div id="now-playing">
		<div class="nav">
				<div class="current" @click="toNowPlaying">正在热映</div>
				<div @click="toComingSoon">即将上映</div>
		</div>
		<films-item v-for="film in nowPlayingDataArr" :film="film"></films-item>
	</div>
</template>

<script>
	import filmsItem from '../../components/films/films-item'
	import {mapGetters} from 'vuex'
	export default {
		name:'now-playing',
		data() {
			return {
				nowPlayingDataArr: [],
				count: 0
			}
		},
		components: {
			filmsItem
		},
		computed: {
			...mapGetters({
				nowPlayingData: 'nowPlayingData'
			})
		},
		methods: {
			toNowPlaying: function(event) {
				this.$router.push('now-playing');
			},
			toComingSoon: function(event) {
				this.$router.push('coming-soon');
			},
			getData: function(page){
				this.$store.dispatch('fetchNowPlayingData',[page, 7]);
//				this.nowPlayingDataArr = this.nowPlayingDataArr.concat(this.nowPlayingData);
//				console.log(this.nowPlayingDataArr);
			}
		},
		watch: {
			nowPlayingData: function() {
				this.nowPlayingDataArr = this.nowPlayingDataArr.concat(this.nowPlayingData);
			}
		},
		created() {
			this.$store.dispatch('fetchNowPlayingData', [1, 7]);
			this.nowPlayingDataArr = this.nowPlayingData;
			let that = this;
			window.onscroll = function() {	
				if(window.pageYOffset > 100 && that.count == 0){
					that.getData(2);
					that.count ++;
				}
				else if(window.pageYOffset > 800 && that.count == 1){
					that.getData(3);
					that.count ++;
				}else if(window.pageYOffset > 1800 && that.count == 2){
					that.getData(4);
					that.count ++;
				}
			}
		}
	}
</script>

<style scoped>
	.nav{
		overflow: hidden;
		font-size: 16px;
		color: #6a6a6a;
		line-height: 45px;
		border-bottom: 1px solid #fe6e00;
	}
	.nav div{
		float: left;
		width: 50%;
	}
	.current{
		color: #fe6e00;
		border-bottom: 3px solid #fe6e00;
	}
</style>