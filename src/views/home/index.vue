<template>
	<div id="index">
		<div class='mySwiper'>
			<swiper :options="swiperOption">
			    <swiper-slide v-for="banner in swiperData">
			    	<img :src="banner.imageUrl"/>
			    	<!--<img-load :src="banner.imageUrl" placeholder="//static.m.maizuo.com/v4/static/app/asset/1598cc489be15707b86e501996a81c6d.png"></img-load>-->
			    </swiper-slide>
			</swiper>
			<!--<div class="slick" data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>
			    <div v-for="banner in swiperData"><a href=""><img :src="banner.imageUrl" alt=""></a></div>
			</div>-->
			
		</div>
		<div class="film">
			<now-playing></now-playing>
			<div class="divide-line"></div>
			<div class="upcoming-text">即将上映</div>
			<coming-soon></coming-soon>
		</div>
		
	</div>
</template>

<script>
	import nowPlaying from './now-playing.vue';
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
	import jquery from 'jquery' 
	import slick from 'slick-carousel'
	import comingSoon from './coming-soon.vue';
	import imgLoad from '../../components/common/img-load'
	
	import {mapGetters} from 'vuex'
	export default {
		name: 'index',
		
		data() {
			return {
				swiperOption: {
					autoplay: 2000,
					autoHeight: true,
					loop: true
				}
			}
		},
		computed: {
			...mapGetters({
				swiperData: 'swiperData'
			})
		},
		components: {
			swiper, 
			swiperSlide,
			jquery,
			slick,
			nowPlaying,
			comingSoon,
			imgLoad
		},
		created() {
			this.$store.dispatch('fetchSwiperData');
//			 jquery('.slick').slick({
//			 		autoplay: true,
//			 		autoplaySpeed: 3000,
//			        infinite: true,
//			        slidesToShow: 1,
//			        slidesToScroll: 1,
//			        swipe: true,
//			        touchMove: true
//			    });
		}
	}
</script>

<style scoped>
	#index{
		margin-top: -10px;
		background-color: #e1e1e1;
	}
	.mySwiper{
		width: 100%;
		height: 5.625rem;
	}
	.mySwiper img{
		width: 100%;
		display: block;
	}
	.divide-line{
		margin: 30px 0;
		border-bottom: 1px solid #A8A8A8;
	}
	.upcoming-text{
		position: relative;
		width: 60px;
		height: 20px;
		font-size: 10px;
		line-height: 20px;
		margin: -40px auto 0;
		color: #EEEEEE;
		background: #a7a7a7;
		border-radius: 5px;
	}
</style>