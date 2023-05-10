//导入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
//创建一个axios实例
const instance = axios.create({
	headers:{
		'content-type':'application/x-www-from-urlencoded'
	},
	withCredentials:true,
})
//http response 拦截器
instance.interceptors.response.use(
	response =>{
		//拦截响应，做统一处理
		if(response.data.isSucces){
			return response.data.result
		}else{
			ElMessage.error(response.data.msg)
			return response.data.result
		}
	},
	//接口错误状态处理，也就是说无响应时的处理
	error=>{
		if(error.response){
			switch(error.response.status)
			{
				
				case 401:
					localStorage.removeItem('Name');
					localStorage.removeItem('token');
					ElMessage.warning("登录失效了登陆后刷新列表")
					break
					case 500:
					ElMessage.warning("内部服务器错误，联系我")
					break
					default:
					return Promise.reject(error.response.data)//返回接口返回的错误信息
				}
			}
			
	})
	export default instance