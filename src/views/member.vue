<template>
  <div>
    <div class="top">
      <div class="top-left">img</div>
      <div class="top-right">
        <div>名称</div>
        <div style="font-size: 14px">暂未开通,飞瓜会员和相关数据服务权益</div>
      </div>
    </div>
    <Tab :tab="tab" />
    <div class="nav">
      <div class="nav-top">
        <div style="color: yellow">尊享服务</div>
        <div style="font-size: 14px; color: blue">查看版本服务对比</div>
      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 12px; margin-right: 5px"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 12px; margin-right: 5px"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 12px; margin-right: 5px"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 12px; margin-right: 5px"
            name="circle"
          />多设备使用
        </div>
      </div>
    </div>

    <div class="price">
      <div class="price-item">
        <div>12个月</div>
        <div style="font-size: 20px; color: green">$2868</div>
        <div style="text-decoration: line-through; font-size: 14px">$4768</div>
        <div
          style="
            border: 1px solid #777;
            font-size: 14px;
            background-color: yellow;
            color: green;
          "
        >
          立省1920
        </div>
      </div>
    </div>
    <div @click="myClick" class="btn">立即以1914元开通</div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      tab: ["高级版", "豪华版", "专业版"],
    };
  },
  methods: {
    myClick() {
      alert("付款");
    },
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 20px;
  &-left {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
}
.nav {
  padding: 20px 10px;
  border: 1px solid #777;
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-bottom {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      flex: 0 0 33%;
      font-size: 14px;
    }
  }
}
.price {
  margin-top: 20px;
  display: flex;
  &-item {
    flex: 0 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #777;
    padding: 10px;
    div {
      margin-top: 10px;
    }
  }
}
.btn {
  padding: 10px 0;
  background-color: green;
  height: 40px;
  margin-top: 20px;
  border-radius: 40px;
}
</style>