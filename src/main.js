/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

import 'highlight.js/styles/tomorrow-night-bright.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import hljs from "highlight.js";
// import "highlight.js/styles/github.css";

import App from './App.vue'
import router from './router/index'

const app = createApp(App);

app.use(hljsVuePlugin);

app.use(Antd)
app.use(router)

// 非实际使用,删除后，代码高亮异常
app.use((app) => {
    app.directive("highlight", {
      mounted(el) {
        const blocks = el.querySelectorAll("pre code"); // querySelectorAll根据代码做调整
        blocks.forEach((block) => {
          hljs.highlightBlock(block);
        });
      },
    });
  })
app.mount('#app');