<template>
  <div class="co-basicBox">
    <div>
      <a-row :gutter="[16, 16]">
        <a-col :sm="6" :xs="24" v-for="(item, index) in cardList" :key="index">
          <a-card hoverable @click="gotoCardDetail(item)">
            <template #cover>
              <img
                alt="txtCard"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
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
          page: "commonCss/txtShadow",
          title: "文字效果",
          info: "文字阴影、扫光效果等集合",
        },
        {
          page: "commonCss/boxShadow",
          title: "边框效果",
          info: "boxshadow效果集合",
        },
        {
          page: "commonCss/cssAnimate",
          title: "CSS3动画",
          info: "简单动画效果集合",
        },
      ];
    },
  },
  data() {
    return {};
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