<template>
  <div class="co-basicBox">
    <div class="co-tipInfo">
      <a-alert message="点击显示代码" type="info" banner show-icon />
    </div>

    <a-row  :gutter="[16,16]">
      <a-col :sm="6" :xs="12" :span="6" class="outbox" @click="showCode(codeObj.cornerBox)">
        <div class="box cornerBox"></div>
      </a-col>
      <a-col :sm="6" :xs="12" :span="6" class="outbox" @click="showCode(codeObj.translucentBox)">
        <div class="box translucentBox"></div>
      </a-col>
      <a-col :sm="6" :xs="12" :span="6" class="outbox" @click="showCode(codeObj.code3)">
        <div class="box radiusCorner"></div>
      </a-col>
       <a-col :sm="6" :xs="12" :span="6" class="outbox" @click="showCode(codeObj.code4)">
        <div class="box tecBorderBox">
          <!-- 四个装饰梯形 -->
          <div class="trapezoid top"></div>
          <div class="trapezoid right"></div>
          <div class="trapezoid bottom"></div>
          <div class="trapezoid left"></div>
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
  components: { CodeModal },
  computed: {
    codeObj() {
      return codeObj;
    },
  },
  data() {
    return {};
  },
  methods: {
    showCode(code) {
      this.$refs.code.show(code);
    },
  },
});
</script>

<style lang="less" scoped>
.outbox{
  background: #eee;
  border-radius: 8px;
  padding: 10px;
}
</style>