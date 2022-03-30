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
    <a-row :gutter="16">
      <a-col :span="7" class="textbox" @click="showCode(codeObj.code1)">
        <div class="text11">1.1 文字效果 text-shadow</div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.code2)">
        <div class="text12">1.2 文字效果 text-shadow 模糊</div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.code3)">
        <div class="text13">1.3 文字效果 text-shadow 多组阴影</div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.code4)">
        <div class="text21">2.1 内阴影 text-shadow</div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.code5)">
        <div class="text31">
          <p>3.1 文字扫光效果-webkit</p>
        </div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.clipText)">
        <div class="clipText">5.1文字镂空</div>
      </a-col>
      <a-col :span="7" class="textbox" @click="showCode(codeObj.zebraText)">
        <div class="zebraText">5.2文字斑马线</div>
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
@import "./index.less";
</style>