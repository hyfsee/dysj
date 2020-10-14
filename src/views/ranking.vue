<template>
  <div class="ranking">
    <!-- 搜索框 -->
    <Search :content="content" />

    <!-- 监控时间选择 -->
    <van-radio-group
      color="white"
      direction="horizontal"
      class="monitoring-time"
      v-model="monitoringTime"
      icon-size="1rem"
    >
      <div style="font-size: 0.875rem; color: white">直播监控时间段</div>
      <div style="font-size: 0.75rem; color: #999; margin-top: 0.625rem">
        若在预约发布时间段内无发布,此次监控也视为完成,但是无监控报告
      </div>
      <van-radio name="timestamp">立即开始监控</van-radio>
      <van-radio name="times">
        <van-cell is-link @click="showPopup">请选择</van-cell>
        <van-popup
          round
          v-model="show"
          position="bottom"
          :style="{ height: '50%' }"
        >
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </van-popup>
      </van-radio>
    </van-radio-group>

    <!-- 开播提醒 -->
    <div class="remind">
      <div class="remind-font">直播开播提醒</div>
      <van-switch size="1.25rem" v-model="checked" />
    </div>

    <!-- 监控时长 -->
    <div class="duration">
      <div>监控时长</div>
      <van-radio-group
        icon-size="1rem"
        class="duration-item"
        v-model="time_length"
        direction="horizontal"
      >
        <van-radio name="6h">6小时</van-radio>
        <van-radio name="12h">12小时</van-radio>
        <van-radio name="1day">24小时</van-radio>
      </van-radio-group>
    </div>

    <!-- 更多 -->
    <div class="more">
      <div>更多监控数据</div>
      <van-checkbox-group
        class="more-item"
        v-model="result"
        direction="horizontal"
      >
        <van-checkbox shape="square" name="barrage">弹幕监控</van-checkbox>
        <van-checkbox shape="square" name="shopping"
          >正在购买人数监控</van-checkbox
        >
      </van-checkbox-group>
    </div>

    <!-- 开始监控 -->
    <div class="start">
      <div class="start-item">开始监控</div>
      <div class="start-text">
        本次监控共消耗
        <span style="color: orange">{{ 1 }}</span>
        次,剩余
        <span style="color: orange">{{ 0 }}</span>
        次直播监控
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
export default {
  components: {
    Search,
  },
  data() {
    return {
      // 搜索框数据
      content: "请输入抖音号ID或播主主页链接进行搜索",
      // 监控时间选择立即开始还是选择时间
      monitoringTime: "1",
      //开播提示按钮
      checked: false,
      //监控时长
      time_length: "1",
      //更多数据
      result: [],
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped lang='less'>
/deep/ .van-picker__toolbar {
  position: absolute;
  bottom: -3.75rem;
  color: black;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 1.875rem;
  .van-ellipsis {
    display: none;
  }
  .van-picker__cancel {
    padding: 0 2.1875rem;
    background-color: #999;
    color: green;
  }
  .van-picker__confirm {
    padding: 0 2.1875rem;
    background-color: green;
    color: white;
  }
}
/deep/ .van-cell {
  display: flex;
  padding: 0.125rem 0.3125rem;
  border: 0.0625rem solid #777;
  background: 0;
  .van-cell__value {
    color: white;
    font-size: 0.75rem;
  }
}
.ranking {
  color: white;
  font-size: 0.875rem;
  .monitoring-time {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    border-top: 0.0625rem solid #999;
    border-bottom: 0.0625rem solid #999;
    .van-radio--horizontal {
      margin-top: 0.625rem;
    }
    /deep/ .van-radio__label {
      font-size: 0.875rem;
      color: white;
    }
  }
  .remind {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid #999;
    &-font {
      margin-right: 1rem;
    }
  }
  .duration {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid #999;
    .duration-item {
      margin-top: 1.25rem;
      width: 100%;
      .van-radio--horizontal {
        margin-right: 1.25rem;
      }
      /deep/ .van-radio__label {
        color: white;
        font-size: 0.875rem;
        margin: 0 0 0 0.3125rem;
      }
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid #999;
    &-item {
      margin-top: 1.25rem;
      .van-checkbox--horizontal {
        margin-right: 1.25rem;
      }
      /deep/ .van-checkbox__label {
        color: white;
        margin: 0 0 0 0.3125rem;
      }
    }
  }
  .start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.25rem;
    &-item {
      width: 6.25rem;
      height: 1.5625rem;
      line-height: 1.5625rem;
      background-color: #777;
      border-radius: 0.1875rem;
      margin-bottom: 0.625rem;
    }
    &-text {
      font-size: 0.75rem;
      color: #999;
    }
  }
}
.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
}
.picker {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0rem;
}
</style>