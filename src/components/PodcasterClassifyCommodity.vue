<template>
  <div>
    <!-- 商品 -->
    <div class="podacster">
      <div class="podacster-left">
        <img style="width: 100%; height: 100%" :src="data.order_img" alt="" />
      </div>
      <div class="podacster-right">
        <div class="podacster-right-top">
          <div class="podacster-right-top-list">1</div>
          <div class="podacster-right-top-name">{{ data.order_name }}</div>
          <div class="podacster-right-top-color">生活</div>
        </div>
        <div class="podacster-right-bottom">
          <div class="num-left">
            <div>{{ data.order_views }}</div>
            <div>浏览量</div>
          </div>
          <div class="num-center">
            <div>{{ data.order_sale }}</div>
            <div>销售量</div>
          </div>
          <div class="num-right">
            <div>{{ data.order_zh }}</div>
            <div>转换率</div>
          </div>
        </div>
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
.podacster {
  display: flex;
  padding: 0.625rem 0;
  border-bottom: 0.0625rem solid #777;
  margin-bottom: 0.625rem;
  &-left {
    width: 5rem;
    height: 5rem;
    color: black;
    margin-right: 0.625rem;
  }
  &-right {
    display: flex;
    flex-direction: column;
    color: black;
    flex: 1;
    &-top {
      display: flex;
      align-items: center;
      &-list {
        z-index: 1;
        color: white;
        font-size: 1.125rem;
      }
      &-icon {
        left: 0.25rem;
        font-size: 1.875rem;
        color: red;
      }
      &-name {
        margin: 0 0.3125rem 0 0.625rem;
      }
      &-color {
        color: green;
        font-size: 0.75rem;
        padding: 0.0625rem 0.1875rem;
        border: 0.125rem solid green;
      }
    }
    &-bottom {
      display: flex;
      font-size: 0.75rem;
      margin-top: 0.625rem;
      justify-content: space-between;
      width: 80%;
    }
  }
}
</style>