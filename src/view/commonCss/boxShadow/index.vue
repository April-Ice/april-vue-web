<template>
  <div class="co-basicBox">
    <div class="co-tipInfo">
      <a-alert message="点击显示代码" type="info" banner show-icon />
    </div>

    <a-row :gutter="30">
      <a-col :sm="6" :xs="12" @click="showCode(codeObj.cornerBox)">
        <div class="box cornerBox"></div>
      </a-col>
      <a-col :sm="6" :xs="12" @click="showCode(codeObj.translucentBox)">
        <div class="box translucentBox"></div>
      </a-col>
      <a-col :sm="6" :xs="12" @click="showCode(codeObj.code3)">
        <div class="box radiusCorner"></div>
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

<style lang="less">
</style>