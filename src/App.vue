<template>
  <div id="app">
		<navbar></navbar>
		<mysidebar></mysidebar>
		<gotoTop></gotoTop>
		<loading></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/common/navbar'
import mysidebar from './components/common/sidebar'
import gotoTop from './components/common/gotoTop'
import loading from './components/common/loading'
export default {
  name: 'app',
  data() {
  	return {
  		showBtn : false
  	}
  },
  components:{
  	navbar,
  	mysidebar,
  	gotoTop,
  	loading
  }
}
</script>

<style>
	@import url("assets/styles/icon.css");
	@import url("assets/styles/reset.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
