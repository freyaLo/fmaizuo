<template>
	<div id="cinemaItem">
		<div class="title">
			<span>
				深圳中影ul城市影院万... 
				<i class="iconfont icon-zuo zuo"></i>
				<i class="iconfont icon-tong tong"></i>
			</span>
			<span><i class="iconfont icon-arrow-right arrow"></i></span>
		</div>
		<div class="tip">
			<span>可乐爆米花</span>
		</div>
		<div class="address">
			<p>深圳市宝安区西乡街道宝田一路中熙香槟...</p>
			<p>距离未知</p>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'cinemaItem'
	}
</script>

<style scoped>
	#cinemaItem{
		height: 98px;
		padding: 14px 14px 10px 16px;
		text-align: left;
		border-bottom: 1px solid #e1e1e1;
	}
	.title{
		font-size: 16px;
	}
	.zuo{
		color: #fc8558;
		font-size: 20px;
	}
	.tong{
		color: #88aec8;
		font-size: 20px;
	}
	.arrow{
		float: right;
		color: #c6c6c6;
	}
	.tip{
		margin: 12px 5px;
	}
	.tip span{
		font-size: 10px;
		color: #FFFFFF;
		padding: 2px 5px;
		border-radius: 3px;
		background: #51add0;
	}
	.address{
		font-size: 12px;
		color: #ccc;
	}
	.address p:first-child{
		margin-bottom: 10px;
	}
	
</style>