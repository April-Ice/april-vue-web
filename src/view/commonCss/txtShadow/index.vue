<template>
  <div class="co-basicBox">
    <div class="co-tipInfo">
      <a-alert
        class="co-tipInfo"
        message="点击显示代码"
        type="info"
        banner
        show-icon
      />
    </div>
    <a-row :gutter="30">
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code1)">
        <div class="text11">1 文字效果 text-shadow</div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code2)">
        <div class="text12">2 文字效果 text-shadow 模糊</div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code3)">
        <div class="text13">3 文字效果 text-shadow 阴影</div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code4)">
        <div class="text21">4 内阴影 text-shadow</div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code5)">
        <div class="text31">
          <p>5 文字扫光效果-webkit</p>
        </div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.clipText)">
        <div class="clipText">6 文字镂空 ABC</div>
      </a-col>
      <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.zebraText)">
        <div class="zebraText">7 斑马线</div>
      </a-col>
       <a-col :sm="12" :xs="24" class="textbox" @click="showCode(codeObj.code8)">
        <div class="moveText">8 动态变色 Change Color</div>
      </a-col>
         
    </a-row>
    <!-- 代码弹窗 -->
    <code-modal ref="code"></code-modal>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import CodeModal from "../../../components/CodeModal";
import codeObj from "./code.js";
import "./index.less";

export default defineComponent({
  components: {
    CodeModal,
  },
  data() {
    return {};
  },
  computed: {
    codeObj() {
      return codeObj;
    },
  },
  mounted() {},
  methods: {
    showCode(code) {
      this.$refs.code.show(code);
    },
  },
});
</script>

<style scoped>
.co-basicBox{
  /* background: rgb(45, 39, 59); */
}
</style>