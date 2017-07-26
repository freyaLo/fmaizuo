<template>
	<div id="film">
		<div class="pic">
			<img :src="filmDesc.cover.origin"/>
		</div>
		<div class="title">
			<p>影片简介</p>
		</div>
		<div class="film-desc">
			<p>导&emsp;&emsp;演 ： {{ filmDesc.director }}</p>
			<p>主&emsp;&emsp;演 ： <span v-for="a in filmDesc.actors">{{ a.name }} | </span></p>
			<p>地区语言 ： {{ filmDesc.nation + ' (' + filmDesc.language + ')' }}</p>
			<p>类&emsp;&emsp;型 ： {{ filmDesc.category }}</p>
			<p>{{ filmDesc.synopsis }}</p>
		</div>
		<div class="buyBtn">
			<button class="myButton">立即购票</button>
		</div>
	</div>
</template>

<script>
//	import axios from 'axios';
	import {mapGetters} from 'vuex'
	export default {
		name: 'film',
		computed: {
			...mapGetters({
				filmDesc: 'filmDescData'
			})
			
		},
		created() {
			this.$store.dispatch('fetchFilmsDescData',this.$route.params.id);	
		}
	}
</script>

<style scoped>
	#film{
		width: 100%;
		height: 100%;
		font-size: 12px;
		text-align: left;
	}
	.pic{
		margin-top: -10px;
		width: 100%;
		height: 5.625rem;
	}
	.pic img{
		width: 100%;
		height: 100%;
	}
	.title{
		height: 24px;
		line-height: 24px ;
		margin: 17px 17px 0 0;
		padding-left: 17px;
		background: rgb(288, 200, 156);
	}
	.title p{
		font-size: 16px;
		background: #E1E1E1;
		padding-left: 3px;
	}
	.film-desc{
		margin: 17px 17px 80px 17px;
	}
	.film-desc p{
		line-height: 18px;
		margin-bottom: 10px;
	}
	.buyBtn{
		position: fixed;
		left: 0;
		bottom: 20px;
		width: 100%;
		text-align: center;
	}
	.myButton{
		width: 156px;
		height: 36px;
		margin: 0 auto;
		font-size: 14px;
		font-weight: bold;
		letter-spacing: 3px;
		color: #FFFFFF;
		line-height: 36px;
		border: none;
		border-radius: 18px;
		background-color: #fe8233;
	}
</style>