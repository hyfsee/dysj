<template>
  <div>
    <div class="top">我的账户</div>
    <div class="center">
      <div class="center-top">
        <router-link to="/myTrill" class="center-top-item">
          <van-icon name="add-o" size="3rem" />
          <div>添加账号</div>
        </router-link>
      </div>
      <router-link to="/account" class="center-bottom">查看更多</router-link>
    </div>
    <Tab :tab="tab" />
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
      tab: ["最新动态", "账号总览"],
    };
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 1.25rem 0;
}
.center {
  border: 0.0625rem solid #777;
  padding: 1.25rem 0;
  &-top {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 25%;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
    }
  }
  &-bottom {
    color: blue;
  }
}
</style>