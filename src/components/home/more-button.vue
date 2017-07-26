<template>
	<div id="moreButton" @click="goTo">
		<button class="myButton">
			<slot></slot>
		</button>
	</div>
</template>

<script>
	export default {
		name:'moreButton',
		props: ['flag'],
		methods: {
			goTo: function() {
				this.$router.push({path:'/films/' + this.flag});
			}
		}
	}
</script>

<style scoped>
	.myButton{
		width: 160px;
		height: 30px;
		color: #616161;
		font-size: 12px;
		outline: none;
		border: 1px solid #AAAAAA;
		border-radius: 15px;
	}
</style>