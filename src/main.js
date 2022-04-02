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
        const blocks = el.querySelectorAll("pre code"); // querySelectorAll可以根据自己的富文本生成的代码做调整 我这里默认刚好
        blocks.forEach((block) => {
        //   // 在forEach中做一些操作
        //   // 1.创建ul节点
        //   const ul = document.createElement("ul");
        //   // 2.根据换行符获取行数，根据获取的行数生成行号
        //   const rowCount = block.outerHTML.split("\n").length;
        //   for (let i = 1; i <= rowCount; i++) {
        //     //创建li节点，创建文本节点
        //     const li = document.createElement("li");
        //     const text = document.createTextNode(String(i));
        //     //为li追加文本节点，将li加入ul
        //     li.appendChild(text);
        //     ul.appendChild(li);
        //   }
        //   // 3.给行号添加类名
        //   ul.className = "pre-numbering";
        //   // 4.将ul节点加到 代码块
        //   block.parentNode.appendChild(ul);
          hljs.highlightBlock(block);
        });
      },
    });
  })
app.mount('#app');