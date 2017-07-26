<template>
	<div id="navbar">
		<div class="side-icon" @click="showNav">
			<i class="iconfont icon-list"></i>
		</div>
		<p class="title">卖座电影</p>
		<div class="personal">
			<i class="iconfont icon-user"></i>
		</div>
		<div class="city">
			<span>深圳</span>
			<i class="iconfont icon-dropdown"></i>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name:'navbar',
		computed:{
			...mapGetters({
				show: 'getLeftNavState'
			})
		},
		methods:{
			showNav: function() {
				this.$store.dispatch('changeLeftNavState', !this.show);
			}
		}
	}
</script>

<style scoped>
	#navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		color: #999;
		font-size: 14px;
		line-height: 50px;
		background: #282828;
		/*overflow: hidden;*/
		z-index: 100;
	}
	.side-icon{
		float: left;
		width: 48px;
		height: 100%;
		color: #999;
		text-align: center;
		border-right: 1px solid #222;
		box-shadow: 1px -1px 1px #363636;
	}
	.title{
		float: left;
		color: white;
		margin-left: 15px;
	}
	.city{
		float: right;
		margin-right: 8px;
	}
	.personal{
		float: right;
		width: 48px;
		height: 100%;
	}
</style>