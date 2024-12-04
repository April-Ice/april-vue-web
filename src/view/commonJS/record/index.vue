<template>
  <div class="co-basicBox">
    <div>
      <div class="codeBox" v-for="(item, index) in codeList" :key="index">
        <highlightjs autodetect :code="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import codeList from "./code.js";

export default defineComponent({
  components: {},
 
  data() {
    return {};
  },
  mounted() {},
  computed: {
    codeList() {
      console.log('----codeList-',codeList)
      return codeList;
    },
  },
  methods: {
    gotoCardDetail(item) {
      this.$router.push(`/${item.page}`);
    },
  },
});
</script>

<style lang="less">
.codeBox{
  margin-bottom: 10px;
}
</style>
