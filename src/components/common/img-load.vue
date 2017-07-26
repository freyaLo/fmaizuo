<template>
	<div id="imgLoad" :style="{'background-image': 'url(' + placeholder+ ')'}">
	<!--<div id="imgLoad">-->
		<img :src=src :style="{opacity: finish ? 1:0}" @load="loaded"/>
		<!--<img :src="placeholder" v-show="loading" :style="{opacity: finish ? 0:1}" @load="loaded"/>-->
		<!--<img :src=src v-show="!loading" :style="{opacity: finish ? 1:0}" @load="loaded"/>-->
	</div>
</template>


<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'imgLoad',
		data(){
			return {
				finish: false
			}
		},
		props: ['placeholder', 'src'],
		computed: {
			...mapGetters({
				loading: 'getLoadingState'
			})
		},
		methods: {
			loaded: function() {
				let that = this;
				setTimeout(function(){
					that.finish = true;
				}, 100);
			}
		}
	}
</script>

<style scoped>
	#imgLoad{
		background-size: 100%;
	}
	#imgLoad img{
		width: 100%;
		transition: all 1.2s ease; 
	}
</style>