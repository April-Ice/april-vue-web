<template>
  <div>
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
      <a-col :sm="4" :xs="24" class="textbox" @click="showCode(codeObj.code1)">
        <div class="halfBg bgBox"> 上下半色 </div>
      </a-col>
      <a-col :sm="4" :xs="24" class="textbox" @click="showCode(codeObj.code2)">
        <div class="moveBg bgBox"> 动态变色 </div>
      </a-col>
      <a-col :sm="4" :xs="24" class="textbox" @click="showCode(codeObj.code3)">
        <div class="bgBox">
          <div class="stripeBg"> 条纹 </div>
        </div>
       
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
</style>