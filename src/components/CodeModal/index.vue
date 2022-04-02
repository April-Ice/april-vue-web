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
    <!-- <div ><pre v-highlight><code>{{codeInfo}}</code></pre></div> -->

    <!-- 高亮代码 -->
    <highlightjs autodetect :code="codeInfo" />
  </a-modal>
</template>


<script >
import { defineComponent } from "vue";
import "./tomorrow-night-bright.css";

export default defineComponent({
  components: {
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