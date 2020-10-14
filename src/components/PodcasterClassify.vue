<template>
  <div>
    <div class="podacster">
      <div class="podacster-left">img</div>
      <div class="podacster-right">
        <div class="podacster-right-top">
          <div class="podacster-right-top-list">1</div>
          <van-icon class="podacster-right-top-icon" name="star" />
          <div class="podacster-right-top-name">{{ data.name }}</div>
          <div class="podacster-right-top-color">生活</div>
        </div>
        <div class="podacster-right-bottom">
          <div class="num-left">
            <div>{{ data.fans }}</div>
            <div>粉丝数</div>
          </div>
          <div class="num-center">
            <div>{{ data.praise }}</div>
            <div>粉丝数</div>
          </div>
          <div class="num-right">
            <div>{{ data.exponent }}</div>
            <div>粉丝数</div>
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
  padding: 0.625rem;
  background-color: #fff;
  margin-bottom: 0.625rem;
  &-left {
    width: 5rem;
    height: 5rem;
    border-radius: 6.25rem;
    background-color: red;
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
        font-size: 0.875rem;
        position: absolute;
        left: 7.75rem;
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