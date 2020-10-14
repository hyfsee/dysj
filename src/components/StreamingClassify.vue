<template>
  <div>
    <!-- 直播 -->
    <div class="streaming">
      <div class="streaming-top">
        <img class="streaming-top-left" :src="data.online_img" alt="" />
        <div class="streaming-top-right">
          <div class="item-top">{{ data.online_name }}</div>
          <div class="item-center">
            <div>行业:生活</div>
            <div>{{data.online_updata}}</div>
          </div>
          <div class="item-bottom">
            <img
              style="
                width: 1.25rem;
                margin-right: 0.3125rem;
                height: 1.25rem;
                border-radius: 0.625rem;
              "
              :src="data.online_img"
              alt=""
            />
            {{ data.online_username }}
          </div>
        </div>
      </div>
      <div class="streaming-bottom">
        <div class="streaming-bottom-left">
          <div>{{ data.online_sale }}</div>
          <div>直播销量</div>
        </div>
        <div class="streaming-bottom-center">
          <div>{{ data.online_money }}</div>
          <div>销量数</div>
        </div>
        <div class="streaming-bottom-right">
          <div>{{ data.online_num }}</div>
          <div>人数峰值</div>
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
  padding: 0.9375rem 0 1.25rem;
  border-bottom: 0.0625rem solid #777;
  color: black;
  &-top {
    display: flex;
    &-left {
      width: 3.75rem;
      height: 4.375rem;
      margin-right: 0.625rem;
    }
    &-right {
      flex: 1;
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
      .item-center {
        display: flex;
        width: 100%;
        justify-content: space-between;
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