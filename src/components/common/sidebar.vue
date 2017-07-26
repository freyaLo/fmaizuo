<template>
	<aside class="sidebar">
		<transition name="sidebar">
			<div class="sidebar-container" @click="hideNav" v-show="show">
				<div class="sidebar-overlay">
					<transition name="leftNav">
						<nav v-show="show">
							<ul>
								<li v-for="menu in menuList">
									<router-link :to="menu.url">
										<span>{{ menu.name }}</span>
										<span><i class="iconfont icon-arrow-right"></i></span>
									</router-link>
								</li>
							</ul>
						</nav>
					</transition>
				</div>
			</div>
		</transition>	
	</aside>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'sidebar',
		data(){
			return {
				menuList:[
					{'name': '首页', 'url': '/'},
					{'name': '影片', 'url': '/films'},
					{'name': '影院', 'url': '/cinema'},
					{'name': '商城', 'url': '/mall'},
					{'name': '演出', 'url': ''},
					{'name': '我的', 'url': ''},
					{'name': '卖座卡', 'url': ''}
				]
			}
		},
		methods:{
			hideNav: function() {
				this.$store.dispatch('changeLeftNavState', false)
			},
			skip: function(path){
				router.push({path: path});
			}
		},
		computed: {
			...mapGetters({
				show:'getLeftNavState'
			})
		}
	}
	
</script>

<style scoped>
	.sidebar-container{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		color: #9a9a9a;
		z-index: 50;
	}
	.sidebar-overlay{
		position: absolute;
		top: 50px;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 51;
	}
	nav{
		border-top: 1px solid #222222;
		box-shadow: 0 1px 1px #363636 inset;
		position: absolute;
		top: 0;
		right: 110px;
		bottom: 0;
		left: 0;
		background: #282828;
		transition: all ease; animation-duration: .4s;
	}
	nav li{
		height: 51px;
		line-height: 51px;
		padding: 0 16px;
		border-bottom: 1px dotted #333;
		font-size: 14px;
		
		text-align: left;
	}
	nav a{
		color: #9a9a9a;
		text-decoration: none;
	}
	nav li:link, nav li:visited{
		background-color: #282828;
	}
	nav li:hover{
		background-color: #282828;
	}
	nav li:active{
		background-color:#333
	}
	nav li span:last-child{
		float: right;
		color: #666;
	}
	.sidebar-enter-active, .sidebar-leave-active{
		transition: all ease 0.4s;
		-webkit-transition: all ease 0.4s;
	}
	.sidebar-enter, .sidebar-leave-active{
		opacity: 0;
	}
	.leftNav-enter-active, .leftNav-leave-active{
		transition: right ease 0.6s;
		-webkit-transition: right ease 0.6s;
	}
	.leftNav-enter, .leftNav-leave-active{
		right: 380px;
	}
</style>