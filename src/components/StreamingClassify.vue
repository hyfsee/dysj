<template>
  <div>
    <div class="streaming">
      <div class="streaming-top">
        <div class="streaming-top-left">img</div>
        <div class="streaming-top-right">
          <div class="item-top">美妆</div>
          <div class="item-center">行业:生活</div>
          <div class="item-bottom">
            <div class="item-bottom-img">img</div>
            小影夫妇
            <span class="item-bottom-txt">469.6w</span>
          </div>
        </div>
      </div>
      <div class="streaming-bottom">
        <div class="streaming-bottom-left">
          <div>{{ data.fans }}</div>
          <div>粉丝数</div>
        </div>
        <div class="streaming-bottom-center">
          <div>{{ data.praise }}</div>
          <div>粉丝数</div>
        </div>
        <div class="streaming-bottom-right">
          <div>{{ data.exponent }}</div>
          <div>粉丝数</div>
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
.streaming {
  padding: 0.9375rem 0.625rem;
  background-color: #fff;
  color: black;
  &-top {
    display: flex;
    &-left {
      width: 3.75rem;
      height: 4.375rem;
      background-color: red;
      margin-right: 0.625rem;
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 0.75rem;
      color: #777;
      .item-top {
        color: black;
        font-size: 1rem;
        margin-bottom: 0.625rem;
      }
      .item-bottom {
        display: flex;
        align-items: center;
        margin-top: 0.3125rem;
        &-txt {
          margin-left: 0.625rem;
        }
      }
    }
  }
  &-bottom {
    display: flex;
    font-size: 0.75rem;
    margin-top: 0.625rem;
    justify-content: space-around;
    width: 100%;
  }
}
</style>