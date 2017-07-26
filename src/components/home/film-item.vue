<template>
	<div id="filmItem" @click="toFilm">
		<div class="film-img">
			<!--<img :src="film.cover.origin"/>-->
			<img-load :src="film.cover.origin" placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></img-load>
		</div>
		<div class="film-desc">
			<div class="film-desc-left">
				<p>{{ film.name }}</p>
				<p v-if="film.isNowPlaying" class="count">{{ film.cinemaCount }} 家影院上映 {{ film.watchCount }}人购票</p>
			</div>
			<div class="film-desc-right">
				<p class="grade" v-if="film.isNowPlaying"> {{ film.grade }} </p>
				<p v-if="film.isComingSoon" class="time"> {{ time }}上映</p>
			</div>
		</div>
	</div>
</template>
	
<script>
	import moment from 'moment'
	import imgLoad from '../common/img-load'
	export default {
		name:'filmItem',
		props: ['film'],
		data() {
			return {
				time:''
			}
		},
		components: {
			imgLoad
		},
		methods: {
			toFilm: function() {
				this.$router.push({name: 'film', params: {id: this.film.id}});
			},
			changeTime: function() {
				let month = moment(this.film.premiereAt).format('MM');
				if(Number(month) < 10){
					this.time = moment(this.film.premiereAt).format('M月DD日');	
				}else{
					this.time = moment(this.film.premiereAt).format('MM月DD日');
				}
			}
		},
		created(){
				this.changeTime();
			}
		
		
	}
</script>

<style scoped>
	#filmItem{
		background: #f9f9f9;
		width: 100%;
		text-align: left;
		font-size: 12px;
		margin-bottom: 17px;
		box-shadow: 0.5px 0.5px 1px #a8a8a8;
	}
	.film-img{
		width: 100%;
		height: 5rem;
	}
	.film-img img{
		width: 100%;
		height: 100%;
	}
	.film-desc{
		overflow: hidden;
		padding: 12px 12px 8px 12px;
		line-height: 100%;
		
	}
	.film-desc-left{
		float: left;
	}
	.count{
		margin-top: 5px;
		color: #9a9a9a;
	}
	.film-desc-right{
		float: right;
		height: 100%;
		color: #f78360;
	}
	.grade{
		font-size: 18px;
	}
	.time{
		font-size: 10px;
	}
</style>