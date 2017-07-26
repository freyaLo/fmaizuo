<template>
	<div id="loading" v-show="loading">
		<div class="spinner">
			<div class="spinner-icon">
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: 'loading',
		data() {
			return {
//				loading: true
			}
		},
		computed: {
			...mapGetters({
				loading: 'getLoadingState'
			})
		}
	}
</script>

<style scoped>
	.spinner{
		position: fixed;
		top: 15px;
		right: 15px;
		z-index: 100;
	}
	.spinner-icon{
		width: 18px;
		height: 18px;
		border: 2px solid transparent;
		box-sizing: border-box;
		border-top-color: #29d;
		border-left-color: #29d;
		border-radius: 50%;
		animation: spinnerRotate 400ms linear infinite;
		-webkit-animation: spinnerRotate 400ms linear infinite;
	}
	@keyframes spinnerRotate{
		0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
	@-webkit-keyframes spinnerRotate{
		0% {-webkit-transform: rotate(0deg);}
		100% {-webkit-transform: rotate(360deg);}
	}
</style>