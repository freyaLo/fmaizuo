<template>
	<div id="cinema">
		<div class="local">宝安区</div>
		<cinema-item v-for="i in 10"></cinema-item>
		
	</div>
</template>

<script>
	import cinemaItem from '../../components/cinema/cinema-item'
	export default {
		name: 'cinema',
		components: {
			cinemaItem
		}
	}
</script>

<style scoped>
	#cinema{
		background-color: #FFFFFF;
	}
	.local{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		text-align: left;
		color: #636363;
		background: #e1e1e1;
		padding-left: 16px;
	}
</style>