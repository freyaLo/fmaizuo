<template>
	<div id="filmsItem" @click="toFilm">
		<div class="pic">
			<img :src="film.poster.thumbnail"/>
		</div>
		<div class="desc">
			<div class="title">
				<p>{{ film.name }}</p>
				<div class="title-right" >
					<span v-if="film.isNowPlaying">{{ film.grade }}</span>
					<span class="iconfont icon-arrow-right arrow"></span>
				</div>
			</div>
			<p>{{ film.intro }}</p>
			<p v-if="film.isNowPlaying"><span>{{ film.cinemaCount }}</span>家影院上映&emsp;&emsp;<span>{{ film.watchCount }}</span>人购票</p>
			<p v-if="film.isComingSoon" class="time">{{ time }}上映  &emsp;{{ day }}</p>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
		name: 'filmsItem',
		props:['film'],
		data(){
			return {
				time: '',
				day: '',
				days: ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
			}
		},
		methods: {
			changeTime: function() {
				let month = moment(this.film.premiereAt).format('MM');
				this.day = this.days[moment(this.film.premiereAt).format('d')];
				if(Number(month) < 10){
					this.time = moment(this.film.premiereAt).format('M月DD日');	
				}else{
					this.time = moment(this.film.premiereAt).format('MM月DD日');
				}
			},
			toFilm: function() {
				this.$router.push({name: 'film', params: {id: this.film.id}});
			}
		},
		created() {
			this.changeTime();
		}
	}
</script>

<style scoped>
	#filmsItem{
		height: 84px;
		padding: 20px 0;
		font-size: 12px;
		border-bottom: 1px dashed #c9c9c9;
		
	}
	#filmsItem p{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.pic{
		float: left;
		width: 60px;
		height: 100%;
	}
	.pic img{
		width: 100%;
		height: 100%;
	}
	.desc{
		float: left;
		width: 70%;
		margin-left: 15px;
		text-align: left;
	}
	.title{
		height: 32px;
		line-height: 32px;
	}
	.title p{
		float: left;
		font-size: 16px;
	}
	.title-right{
		float: right;
		color: #fe6e00;
		font-size: 16px;
	}
	.arrow{
		color: #c6c6c6;
		font-size: 12px;
	}
	.desc>p{
		color: #8e8e8e;
		height: 30px;
		line-height: 30px;
	}
	.desc p:last-child span{
		color: #8aa2bf;
	}
	.desc .time{
		color: #ffb375;
	}
</style>