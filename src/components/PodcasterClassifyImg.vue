<template>
  <div>
    <!-- 视频 -->
    <div class="podacster">
      <div class="podacster-left">
        <img style="width: 100%; height: 100%" :src="data.video_img" alt="" />
      </div>
      <div class="podacster-right">
        <div class="podacster-right-top">
          {{ data.video_name }}
        </div>
        <div class="podacster-right-center">
          <div class="podacster-right-center-left">
            <img
              style="width: 1.25rem; height: 1.25rem; border-radius: 100%"
              src="data.video_img"
              alt=""
            />{{ data.video_username }}
          </div>
          <div class="podacster-right-center-right">{{ data.video_data }}</div>
        </div>
        <div class="podacster-right-bottom">
          <div><van-icon name="good-job-o" />{{ data.video_like }}</div>
          <div><van-icon name="more-o" />{{ data.video_comment }}</div>
          <div><van-icon name="share-o" />{{ data.video_share }}</div>
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
  &-left {
    width: 4rem;
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
      text-align: left;
    }
    &-center {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      margin: 0.3125rem 0;
      color: #777;
      &-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &-bottom {
      display: flex;
      font-size: 0.75rem;
      justify-content: space-between;
      width: 100%;
      div {
        display: flex;
        align-items: center;
        .van-icon {
          margin-right: 0.3125rem;
        }
      }
    }
  }
}
</style>