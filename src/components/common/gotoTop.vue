<template>
	<div id="gotoTop" @click="gotoTop">
		<button class="topBtn">
			<i class="iconfont icon-top"></i>
		</button>
	</div>
</template>

<script>
	export default {
		name:'gotoTop',
		data() {
			return {
//				flag: true
			}
		},
		methods: {
			gotoTop: function() {
				let heightToTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(heightToTop > 0 ){
					let t = setInterval(function(){
						document.documentElement.scrollTop = document.body.scrollTop -= 10;
						heightToTop = document.documentElement.scrollTop || document.body.scrollTop;
						if(heightToTop == 0){
							clearInterval(t);
						}
					},2);
				}
			},
			showTopBtn: function() {
				window.addEventListener('scroll', function() {
					let heightToTop = document.documentElement.scrollTop || document.body.scrollTop;
			  		let goToTop = document.getElementById('gotoTop');
//			  		console.log(heightToTop);
					if(heightToTop > 150){
						goToTop.style.bottom = '10px';
					}else{
						goToTop.style.bottom = '-100px';
					}
				})
			}
		},
		created(){
			this.showTopBtn();
		}
	}
</script>

<style scoped>
	#gotoTop{
		position: fixed;
		right: 10px;
		bottom: -100px;
		width: 48px;
		height: 48px;
		line-height: 48px;
		transition: all ease 800ms;
		-webkit-transition: all ease 800ms;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 50%;
		cursor: pointer;
		z-index: 100;
	}
	.topBtn{
		border: none;
		outline: none;
		background-color: rgba(0, 0, 0, 0);
	}
	.topBtn i{
		color: #FFFFFF;
		font-size: 28px;
		/*background-color: rgba(0, 0, 0, 0.7);*/
		border: none;
	}
</style>