<template>
  <div class="timerBox">
    <div class="topBox">
      <div class="timeBox">
        <span class="cuntTime"> {{ formattedTime }}</span>
      </div>
      <a-row>
        <a-col :span="12" class="btnBox">
          <a-button type="danger" @click="stopTimer" v-if="runStatus === 3">结束</a-button>
          <a-button
            @click="calcTimeLap"
            type="primary"
            v-if="runStatus === 2 || runStatus === 1"
            :disabled="runStatus === 1"
            >记录</a-button
          >
        </a-col>
        <a-col :span="12" class="btnBox">
          <a-button @click="puaseTime"  v-if="runStatus === 2">暂停</a-button>
          <a-button @click="startCalcTime" type="primary" v-if="runStatus === 1 || runStatus === 3"
            >开始</a-button
          >
        </a-col>
      </a-row>
    </div>
    <div class="listBox">
      <div class="tableOut" v-for="(item, index) in LapList" :key="index">
        <a-row class="titleTr">
          <a-col :span="12">序号</a-col>
          <a-col :span="12">测量值</a-col>
        </a-row>
        <a-row class="tdLine" v-for="(time, tIndex) in item.beatsList" :key="tIndex">
          <a-col :span="12">{{ tIndex }}</a-col>
          <a-col :span="12">{{ time.showTime }}</a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  computed: {},
  data() {
    return {
      formattedTime: "00:00.00",
      LapList: [],
      timerInterval: null,
      preFlagTime: 0,
      elapsedTime: 0,
      startTime: 0,
      runStatus: 1, // 1、未运行  2、开始运行   3、暂停运行
    };
  },
  mounted() {},
  methods: {
    startCalcTime() {
      this.startTime = Date.now() - this.elapsedTime;

      if (this.runStatus === 3) {
        // 暂停后开始
      } else {
        // 重新开始--增加一组数据
        let arr = [...this.LapList];
        arr.push({
          beatsList: [],
        });
        this.LapList = arr;
      }

      // 设置计时器
      this.timerInterval = setInterval(() => {
        const time = Date.now() - this.startTime;
        const finalTime = this.calcTime(time);
        this.formattedTime = finalTime;
        this.elapsedTime = time;
      }, 10);

      // 设置运行状态
      this.runStatus = 2;
    },
    stopTimer() {
      // 结束
      clearInterval(this.timerInterval);
      this.preFlagTime = 0;
      this.elapsedTime = 0;
      this.startTime = 0;
      this.formattedTime = "0:0.00";
      this.runStatus = 1;
    },
    // 记录
    calcTimeLap() {
      // 计算间隔
      const totalMilliseconds = this.elapsedTime - this.preFlagTime;
      const finalTime = this.calcTime(totalMilliseconds);

      // 保存分段时间
      this.preFlagTime = this.elapsedTime;

      // 保存时间间隔
      let arr = [...this.LapList];
      if (arr[arr.length - 1]) {
        let list = arr[arr.length - 1]?.beatsList || [];
        list.push({
          showTime: finalTime,
        });
        arr[arr.length - 1].beatsList = list;
        this.LapList = arr;
      }
    },
    // 暂停
    puaseTime() {
      clearInterval(this.timerInterval);
      this.runStatus = 3;
    },
    // 时间转换
    calcTime(time) {
      const totalMilliseconds = time;

      const minutes = Math.floor(totalMilliseconds / 60000);
      const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
      const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

      const formatNumber = (num) => (num < 10 ? `0${num}` : num);

      return `${formatNumber(minutes)}:${formatNumber(seconds)}.${formatNumber(
        milliseconds
      )}`;
    },

    // -----------
  },
});
</script>

<style lang="less" scoped>
.timerBox {
  width: 400px;
  margin: 0 auto;
  background: #fff;
  padding: 24px;
}
.topBox {
  background: #f4f8f9;
  padding: 30px 0;

  .timeBox {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;

    .cuntTime {
      font-size: 28px !important;
    }
  }

  .rightBtnCol {
    text-align: right !important;
    padding-right: 20px;
  }

  .leftBtnCol {
    padding-left: 20px;
  }
}
.btnBox {
  text-align: center;
}

.listBox {
  margin-bottom: 16px;
  padding-bottom: 16px;

  .titleLine {
    display: flex;
    align-items: strech;
    line-height: 2;

    .title {
      flex: 1;
      text-align: center !important;
      font-size: 16px;
      font-weight: bold;
      color: #53565d !important;
    }

    .IconDel {
      display: inline-block;
      flex: 0 0 auto;
      font-size: 16px;
      line-height: 2;
    }
  }

  .callaTitle {
    font-size: 18px !important;
    font-weight: bold;
  }

  .tableOut {
    border: 1px solid #f2f3f5;
    border-radius: 8px;
    text-align: center;
  }

  .titleTr {
    background: #f7f8fa;
    padding: 8px 10px;
    color: #53565d !important;
    font-size: 16px !important;
    font-weight: bold !important;
  }

  .tdLine {
    border-top: 1px solid #f2f3f5;
    padding: 8px 10px;
    color: #7a828e !important;
    font-size: 16px !important;

    .deteTxt {
      color: #20b5b1 !important;
      font-size: 16px !important;
    }
  }
}
</style>
