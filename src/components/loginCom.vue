<template>
	<el-dialog v-model="IsShowLogin" title="登录" width="38%" :before-close="handleClose">
		<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
			<el-form-item label="用户">
				<el-input v-model="form.UserName" />
			</el-form-item>

			<el-form-item label="密码">
				<el-input type="password" v-model="form.Password" />
			</el-form-item>
			<el-form-item label="验证码">
				<el-input v-model="form.ValidateCode" />
				<el-image style="width: 200px;height: 100px;" :src="vaildImages" @click="ChangeImage"></el-image>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submit">确定</el-button>
				<el-button @click="CloseLogin">取消</el-button>
			</el-form-item>
		</el-form>

	</el-dialog>


</template>

<script lang="ts" setup>
	import {
		computed,
		ref,
		onMounted
	} from "vue";
	import {
		useStore
	} from 'vuex'
	import {
		getToken
	} from '../http/index'
	import {
		ElMessage
	} from 'element-plus'
	import {
		oriVaildImages, guid, FormatToken
	} from '../global/index'
	const vaildImages = ref(oriVaildImages.value);
	let ValidateKey="";
	//组件加载事件
	onMounted(()=>{
		const t = guid();
		ValidateKey = t;
		vaildImages.value = oriVaildImages.value +t;
	});
	//点击切换验证码
	const ChangeImage = () =>{
		const t =guid();
		ValidateKey = t;
		vaildImages.value = oriVaildImages.value +t;
	}
	const store = useStore()
	const IsShowLogin = computed(() => store.state.IsShowLogin)
	const handleClose = (done: () => void) => {
		store.commit('CloseLogin')
		done();
	};
	const CloseLogin = () => {
		store.commit('CloseLogin')
	}
	const form = ref();
	form.value = {
		UserName: "",
		Password: "",
		ValidateCode:""
	}
	
	
	const submit = async () => {
		var data = {
			UserName: form.value.UserName,
			Password: form.value.Password,
			ValidateCode:form.value.ValidateCode,
			ValidateKey:ValidateKey
		}
		console.log(data);
		var res = (await getToken(data)).data;
		if (res.isSucces) {
			ElMessage({
				message: '登录成功',
				type: 'success',
			})
			let user = JSON.parse(FormatToken(res.result))
			console.log(user)
			localStorage["token"] = res.result;
			//设置全局变量的值
			store.commit('SettingNickName', user.UserName)
			//设置localStorage,保证页面刷新后vuex的值可以从里面读取，避免刷新后状态丢失
			localStorage["Name"] = user.UserName
			//登录成功后隐藏登录框
			store.commit('CloseLogin')
		} else {
			ElMessage.error(res.msg)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
