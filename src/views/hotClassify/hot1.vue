<template>
  <!-- 热门音乐 -->
  <div class="hot">
    <div class="hot-top">
      数据更新时间:
      <div class="hot-top-left">2020-09-17</div>
      <div class="hot-top-right">12:17:19</div>
    </div>
    <div v-for="(item,index) in data" :key="index" class="hot-bottom">
      <img class="hot-bottom-img" src alt />
      <div class="hot-bottom-text">
        <div class="hot-bottom-text-top">用户创作的原声</div>
        <div class="hot-bottom-text-center">时长:7秒</div>
        <div class="hot-bottom-text-bottom">107.9W人参与</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped lang='less'>
.hot {
  display: flex;
  flex-direction: column;
  &-top {
    display: flex;
    font-size: 0.75rem;
    justify-content: flex-end;
    padding: 10px 0;
    border-bottom: 1px solid #555;
    color: #777;
    &-left {
      display: flex;
      align-items: center;
      margin-right: 0.3125rem;
    }
    &-right {
      display: flex;
      align-items: center;
    }
  }
  &-bottom {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #555;
    &-img {
      width: 100px;
      height: 100px;
      margin-right: 0.625rem;
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
      font-size: 0.875rem;
      color: #777;
      &-top {
        color: white;
        font-size: 1rem;
      }
    }
  }
}
</style>