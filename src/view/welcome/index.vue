<template>
  <!-- 移动端 -->
  <div v-if="isMobile">
    <div style="mobileCon">
      <!-- menu -->
      <a-row :gutter="30" class="mobileCon">
        <a-col
          :span="8"
          class="itembox"
          v-for="item in menuList"
          :key="item.key"
          @click="show(item.key)"
        >
          <a-avatar :size="70">
            <template #icon>
              <AntDesignOutlined />
            </template>
          </a-avatar>
          <p>{{ item.name }}</p>
        </a-col>
      </a-row>
    </div>
  </div>
  <!-- web端 -->
  <div v-else class="layBox">
    <div class="skewed-bg">
      <div class="content">
        <p> The truth is rarely pure and never simple.</p>
        <p>
          One’s real life is often the life that one does not lead.
        </p>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import { AntDesignOutlined } from "@ant-design/icons-vue";
import MenuList from "../../router/menu.js";

export default defineComponent({
  components: {
    AntDesignOutlined,
  },
  computed: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    menuList() {
      return MenuList;
    },
  },
  data() {
    return {};
  },
  methods: {
    show(index) {
      console.log("-- welcome--", process.env.NODE_ENV);
      this.$router.push(`/${index}`);
    },
  },
});
</script>

<style lang="less">
.mobileCon {
  min-height: calc(100vh - 5em - 4em);
  padding: 1em;
}
.itembox {
  text-align: center;
}

@main-color: #00b285;
.layBox {
  background: #fff;
  overflow: hidden;
}

.skewed-bg {
  background: @main-color;
  color: #fff;
  height: calc(58vh + 200px);
  padding: 200px 0;
  margin-top: -200px;
  transform: skew(0deg, -10deg);
 
 .content {
    transform: skew(0deg, 10deg);
    text-align: center;
    color: #fff;
    padding-top: 160px;
    font-size: 16px;
  }
}

.footer {
  padding-top: 300px;
  height: 20vh;
  .credits {
    text-align: center;
    color: #666;

    .link {
      color: @main-color;
      text-decoration: none;
    }
  }
}
</style>