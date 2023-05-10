<template>
	<el-row>
		<el-col :span="24">
			<ul>
				<li v-if="store.state.Name==undefined" @click="OpenLogin">
					<el-link :underline='false'>登录</el-link>
				</li>
				<li v-if="store.state.Name==undefined" @click="OpenRegister">
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

	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
		text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" router>
		<el-menu-item index="/">首页</el-menu-item>

	</el-menu>
	<el-row>
		<el-col :span="8">
			<el-link :underline="false" href="/">
				<el-image></el-image>
			</el-link>
		</el-col>
	</el-row>
	<LoginCom></LoginCom>
	<RegisterCom></RegisterCom>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	import LoginCom from "./loginCom.vue";
	import RegisterCom from "./RegisterCOM.vue";
	const store = useStore()
	const OpenLogin = () => {
		store.commit('OpenLogin')
	}
	const OpenRegister =() => {
		store.commit('OpenRegister')
	}
	const activeIndex2 = ref('/')
	const handleSelect = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const LogOut =()=>{
		//清理vuex状态 //清理localStorage
		localStorage.removeItem('Name');
		localStorage.removeItem('token');
		store.commit('SettingNickName',undefined)
	}
</script>


<style lang='scss'>
	ul {
		list-style: none;
		padding-left: 80%;
	}

	li {
		float: left;
		margin-left: 15px;
	}
</style>
