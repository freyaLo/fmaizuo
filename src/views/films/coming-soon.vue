<template>
	<div id="coming-soon">
		<div class="nav">
				<div  @click="toNowPlaying">正在热映</div>
				<div class="current" @click="toComingSoon">即将上映</div>
		</div>
		<films-item v-for="film in comingSoonData" :film="film"></films-item>
	</div>
</template>

<script>
	import filmsItem from '../../components/films/films-item'
	import {mapGetters} from 'vuex'
	export default {
		name:'coming-soon',
		data() {
			return {
//				comingSoonDataArr: [],
				page: 1
			}
		},
		components: {
			filmsItem
		},
		computed: {
			...mapGetters({
				comingSoonData:'comingSoonData',
				comingSoonPage: 'comingSoonPage'
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
				let that = this;
				window.addEventListener('scroll', function(){
					let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
					let currentPage = that.comingSoonPage.current;
					let totalPage = that.comingSoonPage.total;
					let count = parseInt(heightTop/100);
//					console.log(totalPage)
					if(count > 1){
						for(let i = 2; i < count; i++){
//							console.log(page)
							if(i > that.page){
								that.$store.dispatch('fetchComingSoonData',[i, 7]);
								that.page ++;
							}
						}
					}
				})				
			}
		},
//		watch: {
//			comingSoonData: function() {
//				this.comingSoonDataArr = this.comingSoonDataArr.concat(this.comingSoonData);
//			}
//		},
		created() {
			this.$store.dispatch('fetchComingSoonData',[1, 7]);
			this.getData();
			
//			window.onscroll = function() {	
//				if(window.pageYOffset > 100 && that.count == 0){
//					that.getData(2);
//					that.count ++;
//				}
//				else if(window.pageYOffset > 800 && that.count == 1){
//					that.getData(3);
//					that.count ++;
//				}else if(window.pageYOffset > 1800 && that.count == 2){
//					that.getData(4);
//					that.count ++;
//				}
				
//			}
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