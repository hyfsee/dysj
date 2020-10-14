<template>
  <div>
    <div class="top">
      <div class="top-left">
        <img style="width: 100%; height: 100%" src="../assets/a1.jpg" alt="" />
      </div>
      <div class="top-right">
        <div>名称</div>
        <div style="font-size: 0.875rem">
          暂未开通,飞瓜会员和相关数据服务权益
        </div>
      </div>
    </div>
    <Tab :tab="tab" />
    <div class="nav">
      <div class="nav-top">
        <div style="color: yellow">尊享服务</div>
        <div style="font-size: 0.875rem; color: blue">查看版本服务对比</div>
      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 0.75rem; margin-right: 0.3125rem"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 0.75rem; margin-right: 0.3125rem"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 0.75rem; margin-right: 0.3125rem"
            name="circle"
          />多设备使用
        </div>
        <div class="nav-bottom-item">
          <van-icon
            style="font-size: 0.75rem; margin-right: 0.3125rem"
            name="circle"
          />多设备使用
        </div>
      </div>
    </div>

    <div class="price">
      <div class="price-item">
        <div>12个月</div>
        <div style="font-size: 1.25rem; color: green">$2868</div>
        <div style="text-decoration: line-through; font-size: 0.875rem">
          $4768
        </div>
        <div
          style="
            border: 0.0625rem solid #777;
            font-size: 0.875rem;
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
  padding: 1.25rem;
  &-left {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 3.125rem;
    background-color: #fff;
    color: black;
    margin-right: 0.625rem;
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
  padding: 1.25rem 0.625rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-bottom {
    display: flex;
    margin-top: 1.25rem;
    flex-wrap: wrap;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.625rem;
      flex: 0 0 33%;
      font-size: 0.875rem;
    }
  }
}
.price {
  margin-top: 1.25rem;
  display: flex;
  &-item {
    flex: 0 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 0.0625rem solid #777;
    padding: 0.625rem;
    div {
      margin-top: 0.625rem;
    }
  }
}
.btn {
  padding: 0.625rem 0;
  background-color: green;
  height: 2.5rem;
  margin-top: 1.25rem;
  border-radius: 2.5rem;
}
</style>