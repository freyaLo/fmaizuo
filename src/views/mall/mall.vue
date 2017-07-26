<template>
	<div id="mall">
		<div class='mySwiper'>
			<swiper :options="swiperOption">
			    <swiper-slide v-for="banner in banners">
			    	<img :src="banner"/>
			    </swiper-slide>
			     <div class="swiper-pagination swiper-pagination-bullets"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	export default {
		name:'mall',
		data() {
			return {
				swiperOption: {
					autoplay: 2000,
					autoHeight: true,
					loop: true,
					pagination: '.swiper-pagination'
				},
				banners:[ '../../static/img/10.jpg', '../../static/img/11.jpg', '../../static/img/12.jpg']
			}
		},
		components: {
			swiper, 
			swiperSlide
		}
	}
</script>

<style scoped>
	.mySwiper{
		width: 100%;
		height: 1.84rem;
	}
	.mySwiper img{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>