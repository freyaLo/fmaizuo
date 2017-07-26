<template>
	<div id="films">
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'films',
		created() {
			document.body.scrollTop =0;
		}
	}
</script>

<style scoped>
	.content{
		padding: 0 15px;
		background: #f9f9f9;
	}
	
</style>