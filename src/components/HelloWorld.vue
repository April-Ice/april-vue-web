<template>
  <div class="hello">
    <a-layout style="min-height: 100vh">
      <!-- 侧边菜单 -->
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="menuLogo">
          <a-avatar :size="50" style="background-color: #20bdb5">
            <template #icon> <AntDesignOutlined /></template>
          </a-avatar>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item
            v-for="item in menuList"
            :key="item.key"
            @click="show(item.key)"
          >
            <template #icon>
              <dashboard-outlined
                :style="{ fontSize: '18px', color: '#ff0' }"
              />
            </template>
             {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <!-- 内容 -->
      <a-layout>
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240); padding-top: 1em"
          title="Hello"
          sub-title=""
          @back="goback()"
        />
        <a-layout-content>
          <div class="contentBox">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { AntDesignOutlined, DashboardOutlined } from "@ant-design/icons-vue";
import MenuList from "../router/menu.js";
import "./common.less";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    AntDesignOutlined,
    DashboardOutlined,
  },
  computed: {
    menuList() {
      return MenuList;
    },
  },

  data() {
    return {};
  },
  methods: {
    show(index) {
      this.$router.push(`/${index}`);
    },
    goback() {
      this.$router.go(-1);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.menuLogo {
  text-align: center;
  padding: 2em 0;
  background: #002140;
  margin-bottom: 1em;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: #eee;
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(190, 190, 190);
  -webkit-box-shadow: #eee;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgb(198, 222, 228);
}
</style>
