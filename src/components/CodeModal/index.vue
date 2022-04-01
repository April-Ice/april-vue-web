<template>
  <a-modal
    class="codeModal"
    v-model:visible="visible"
    title="Code"
    @ok="handleOk"
  >
    <template #footer>
      <a-button key="back" @click="handleOk">确定</a-button>
    </template>
    <!-- 高亮代码 -->
    <highlightjs autodetect :code="codeInfo" />
  </a-modal>
</template>


<script >
import { defineComponent } from "vue";

import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default defineComponent({
  components: {
    highlightjs: hljsVuePlugin.component
  },
  data() {
    return {
      visible: false,
      codeInfo: "",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    show(code) {
      this.visible = true;
      this.codeInfo = code;
    },
    handleOk() {
      this.visible = false;
    },
  },
});
</script>

<style lang="less">
.codeModal {
  .ant-modal-body {
    padding: 0;
  }
  pre {
    margin-bottom: 0;
  }
}
</style>