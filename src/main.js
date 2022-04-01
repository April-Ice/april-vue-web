import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

import 'highlight.js/styles/tomorrow-night-bright.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import App from './App.vue'
import router from './router/index'

const app = createApp(App);

app.use(hljsVuePlugin);

app.use(Antd)
app.use(router)
app.mount('#app');