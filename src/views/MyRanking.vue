<template>
  <div>
    <div class="top">我的账户</div>
    <div class="center">
      <div class="center-top">
        <div class="center-top-item">
          <van-icon name="add-o" size="3rem" />
          <div>添加账号</div>
        </div>
      </div>
      <div class="center-bottom">查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 20px 0;
}
.center {
  border: 1px solid #777;
  padding: 20px 0;
  &-top {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 25%;
      font-size: 14px;
    }
  }
}
</style>