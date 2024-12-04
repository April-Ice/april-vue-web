<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {};
  },
  computed: {
    colsArr() {
      let arr = [];
      return arr;
    },
    columns() {
      let arr = [];
      this.colsArr.mmap((item) => {
        let obj = {
          title: item.title,
          dataIndex: item.colKey,
          key: item.colKey,
        };
        // 变色行
        if(item.ifColorCell){
          obj
        }
        arr.push(obj);
      });
      return arr;
    },
  },
  mounted() {},
  methods: {},
});
</script>

<style scoped></style>
