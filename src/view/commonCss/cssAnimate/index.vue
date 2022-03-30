<template>
  <div class="co-basicBox">
    <div class="co-tipInfo">
      <a-alert
        message="悬停展示效果，点击显示代码"
        type="info"
        banner
        show-icon
      />
    </div>
    <a-row :gutter="16">
      <a-col
        :span="4"
        class="itemBox"
        v-for="(item, index) in animateList"
        :key="index"
        @click="showCode(codeObj[item.code])"
      >
        <div :class="item.code">{{ item.title }}</div>
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
    return {
      animateList: [
        { code: "bounce", title: "bounce弹跳" },
        { code: "flash", title: "flash闪烁" },
        { code: "pulse", title: "pulse放大" },
        { code: "rubberBand", title: "rubberBand拉扯" },
        { code: "shake", title: "shake晃动" },
        { code: "swing", title: "swing摇摆" },
        { code: "tada", title: "tada波动" },
        { code: "wobble", title: "wobble摇动" },
        { code: "bounceIn", title: "bounceIn放大进入" },
        { code: "bounceInDown", title: "bounceInDown下落进入" },
        { code: "bounceInLeft", title: "bounceInLeft左侧进入" },
        { code: "fadeIn", title: "fadeIn淡入" },
        { code: "fadeOut", title: "fadeOut" },
        { code: "fadeOutDown", title: "fadeOutDown" },
        { code: "flip", title: "flip旋转3d" },
        { code: "flipInX", title: "flipInX旋转纵" },
        { code: "flipInY", title: "flipInY旋转横" },
        { code: "flipOutX", title: "flipOutX旋转消失" },
        { code: "flipOutY", title: "flipOutY旋转消失" },
        { code: "lightSpeedIn", title: "lightSpeedIn变形入" },
        { code: "lightSpeedOut", title: "lightSpeedOut变形出" },
        { code: "rotateIn", title: "rotateIn旋转2d" },
        { code: "rotateInDownLeft", title: "rotateInDownLeft左旋入" },
        { code: "slideInDown", title: "slideInDown降落" },
        { code: "hinge", title: "hinge剥落" },
        { code: "zoomInDown", title: "zoomInDown由远及近" },
        { code: "zoomOutUp", title: "zoomOutUp由近及远" },
      ],
    };
  },
  methods: {
    showCode(code) {
      this.$refs.code.show(code);
    },
  },
});
</script>
