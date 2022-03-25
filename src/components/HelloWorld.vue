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
            <span> {{ item.name }} </span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <!-- 内容 -->
      <a-layout>
        <a-layout-header style="background: #fff;padding-top:1em">
          <a-typography-title :level="4">Hello</a-typography-title>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
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
import { AntDesignOutlined } from "@ant-design/icons-vue";
import MenuList from "../router/menu.js"

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    AntDesignOutlined,
  },
  computed:{
    menuList(){
      return  MenuList
    }
  },
  data() {
    return {
    };
  },
  methods: {
    show(index) {
      console.log("--show---", index);
      this.$router.push(`/${index}`);
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
.contentBox{
  padding: 1em;
}
</style>
