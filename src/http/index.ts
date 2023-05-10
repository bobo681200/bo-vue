import axios from 'axios';
import {ref} from 'vue'
//需要拦截器的地方使用instance对象，有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
import instance from './filter'
//获取首页轮播图 导出方法
const json = ref("/json")
//后端跨域写法
const http = ref("http://localhost:8080/api")

/* //前端代理写法直接接入vue.config.js 中的api
const http = ref("/api") */
export const getBanners = () =>{
	return axios.get(json.value + "/banner.json");
}
export const getBanners2 = () =>{
	return axios.get(http.value + "/Iamge/GetIamges");
}

export const getFlowerg	= (parms: {}) =>{
	return axios.post(http.value + "/Photo/GetFlowers", parms);
}
export const Register	= (parms: {}) =>{
	return axios.post(http.value + "/Login/Register", parms);
}
//登录获取Token
export const getToken	= (parms: {}) =>{
	return axios.post(http.value + "/Login/Chek", parms);
}



//生成订单发送token认证
export const CreateOrder = (parms: {}) => {
	//在header里携带token访问后端接口
	axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
	return axios.post(http.value + "/Order/CreateOrder", parms);
}

//以下为两种方式
//获取订单列表
/* export const GetOrder = () => {
//在header里携带token访问后端接口
	axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
	return axios.post(http.value + "/Order/GetOrder");
}
 */
export const GetOrder = () => {
//在header里携带token访问后端接口
	instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
	return instance.post(http.value + "/Order/GetOrder");
}