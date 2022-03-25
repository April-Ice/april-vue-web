import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router/index'

import 'ant-design-vue/dist/antd.less';
// import './assets/theme.less'; // 自定义Antd通用变量

const app = createApp(App);

// app.use(Antd).mount('#app');
app.use(Antd)
app.use(router)
app.mount('#app');