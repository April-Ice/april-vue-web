<template>
    <div class="co-basicBox">
      <div>
        <a-row :gutter="[16, 16]">
          <a-col :sm="6" :xs="24" v-for="(item, index) in cardList" :key="index">
            <a-card hoverable @click="gotoCardDetail(item)">
              <a-card-meta :title="item.title" :description="item.info">
                <template #avatar>
                  <a-avatar style="background-color: #20bdb5">
                    <template #icon> <crown-outlined /> </template>
                  </a-avatar>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </template>
  
  <script >
  import { CrownOutlined } from "@ant-design/icons-vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    components: {
      CrownOutlined,
    },
    computed: {
      cardList() {
        return [
          {
            page: "commonJS/componets/coms/timer",
            title: "timer",
            info: "计时器",
          },
        ];
      },
    },
    data() {
      return {};
    },
      mounted(){
      console.log('---AAAAAAAAA----')
    },
    methods: {
      gotoCardDetail(item) {
        this.$router.push(`/${item.page}`);
      },
    },
  });
  </script>
  
  <style lang="less">
  </style>