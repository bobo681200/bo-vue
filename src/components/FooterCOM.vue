<template>

	<div class="top-bar" style="box-shadow: 0 4px 3px 0 rgba(5, 16, 44, .15);">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-6">
					<div class="right-top">
						<div class="social-box">

						</div>
					</div>
				</div>
				<div class="col-md-6 col-sm-6">
					<div class="left-top">
						<span>Mr.王</span>
						<div class="email-box">
							<a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i> 2359010703@qq.com</a>
						</div>
						<div class="phone-box">
							<a href="tel:1234567890"><i class="fa fa-phone" aria-hidden="true"></i> +158 8309 4775</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<header class="header header_style_01">
		<nav class="megamenu navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="index.html"><img src="../assets/logo.png" alt="image"></a>
					<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar"
						aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="collapse navbar-collapse" id="navbar">
					<ul class="navbar-nav ml-auto">

						<li><a class="active" href="index.html">主页</a></li>
						<li><a href="about-us.html">关于我</a></li>
						<li><a href="services.html">项目展示</a></li>
						<li><a href="portfolio.html">有趣的</a></li>
						<li><a href="features.html">cahtGPT</a></li>
						<li><a href="testimonials.html" style="line-height: 18px;"> 给点建议</a></li>

					</ul>
				</div>
			</div>
			<el-row>
				<el-col :span="44" style="">
					<ul>
						<li v-if="store.state.Name==undefined" @click="OpenLogin" style="width:40px;float: left;">
							<el-link :underline='false'>登录</el-link>
						</li>
						<li v-if="store.state.Name==undefined" @click="OpenRegister" style="width: 40px;float: left;">
							<el-link :underline='false'>注册</el-link>
						</li>
						<li v-if="store.state.Name!=undefined">
							<el-link :underline='false'>{{store.state.Name}}</el-link>
						</li>
						<li v-if="store.state.Name!=undefined">
							<el-link :underline='false'>个人中心</el-link>
						</li>
						<li v-if="store.state.Name!=undefined" @click="LogOut">
							<el-link :underline='false'>注销</el-link>
						</li>

					</ul>
				</el-col>
			</el-row>
	
			<LoginCom></LoginCom>
			<RegisterCom></RegisterCom>
		</nav>

	</header>

</template>

<script lang="ts" setup>
	import {
		useStore
	} from 'vuex'
	import LoginCom from "./loginCom.vue";
	import RegisterCom from "./RegisterCOM.vue";
	const store = useStore()
	const OpenLogin = () => {
		store.commit('OpenLogin')
	}
	const OpenRegister = () => {
		store.commit('OpenRegister')
	}

	const LogOut = () => {
		//清理vuex状态 //清理localStorage
		localStorage.removeItem('Name');
		localStorage.removeItem('token');
		store.commit('SettingNickName', undefined)
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>