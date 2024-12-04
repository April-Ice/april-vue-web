<template>
  <div class="co-basicBox">
    <a-row :gutter="16">
      <a-col
        :span="8"
        :xs="24"
        class="itemBox"
        @click="showCode(codeObj['tabBox'])"
      >
        <div class="tabBox">
          <ul class="tabs">
            <li>
              <span>CodePen - A Pen by Adem ilter</span>
            </li>
            <li class="active">
              <span>Adem ilter - Master of Pixels</span>
            </li>
            <li>
              <span>Dribbble - Adem ilter</span>
            </li>
          </ul>
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
