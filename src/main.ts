import { createApp } from 'vue'
import App from './App.vue'
import FooterCOM from './components/FooterCOM.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import router from './routers'
import store from './vuex/store'


const app = createApp(App)
app.use(Layui)
app.use(ElementPlus)

app.use(router)
app.use(store)//挂载vuex                         
app.mount('#app')
/* createApp(App).mount('#app') */

const apt = createApp(FooterCOM)
apt.use(Layui)
apt.use(ElementPlus)

apt.use(router)
apt.use(store)//挂载vuex                         
apt.mount('#apt')
/* createApp(App).mount('#app') */