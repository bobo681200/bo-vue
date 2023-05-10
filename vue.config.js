
const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	//本地代理
/* 	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5284/api',
				//允许跨域
				changeOrigin: true,
				ws: true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	} */
})