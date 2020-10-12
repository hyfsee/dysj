<template>
  <div>
    <div class="top">
      <div class="top-top">
        <div class="top-top-left">img</div>
        <div class="top-top-right">
          <div class="top-top-right-top">抖音小助手</div>
          <div class="top-top-right-center">参与人数374.4w</div>
        </div>
      </div>
      <div class="top-bottom">收藏</div>
    </div>
    <div class="num">
      <div class="num-top">近七日新增参与人数</div>
      <div class="num-bottom">img</div>
    </div>
    <div class="distribution">
      <div class="distribution-top">
        <div class="distribution-top-left">参与人数行业分布</div>
        <div class="distribution-top-right">
          生活
          <div style="color:green;margin-left:0.3125rem">64.48%</div>
        </div>
      </div>
      <div class="distribution-bottom">img</div>
    </div>
    <div class="music">
      <div class="music-top">关联当前音乐的视频</div>
      <div class="music-item">
        <div class="music-item-left">img</div>
        <div class="music-item-right">
          <div class="music-item-right-top">最高礼遇,迎'战役'英雄!最高礼遇,迎'战役'英雄最高礼遇</div>
          <div class="music-item-right-center">
            <div class="music-item-right-center-left">
              <div class="music-item-right-center-left-img">img</div>央视新闻
            </div>
            <div class="music-item-right-center-right">09月08日</div>
          </div>
          <div class="music-item-right-bottom">
            <div class="music-item-right-bottom-left">1231.8w</div>
            <div class="music-item-right-bottom-center">45.1w</div>
            <div class="music-item-right-bottom-right">21.2w</div>
          </div>
        </div>
      </div>
      <div class="music-item">
        <div class="music-item-left">img</div>
        <div class="music-item-right">
          <div class="music-item-right-top">最高礼遇,迎'战役'英雄!最高礼遇,迎'战役'英雄最高礼遇</div>
          <div class="music-item-right-center">
            <div class="music-item-right-center-left">
              <div class="music-item-right-center-left-img">img</div>央视新闻
            </div>
            <div class="music-item-right-center-right">09月08日</div>
          </div>
          <div class="music-item-right-bottom">
            <div class="music-item-right-bottom-left">1231.8w</div>
            <div class="music-item-right-bottom-center">45.1w</div>
            <div class="music-item-right-bottom-right">21.2w</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.top {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
    width: 100%;
    &-left {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
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
      font-size: 0.875rem;
      &-top {
        font-size: 1rem;
      }
      &-center {
        display: flex;
        color: #777;
        margin-top: 0.625rem;
      }
    }
  }
  &-bottom {
    background-color: green;
    color: white;
    width: 40%;
    height: 1.875rem;
    line-height: 1.875rem;
    margin-top: 1.25rem;
  }
}
.num {
  padding: 0.9375rem 0.625rem;
  margin-top: 1.25rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
  }
  &-bottom {
    height: 12.5rem;
    background-color: #fff;
    color: black;
    margin-top: 0.625rem;
  }
}
.distribution {
  padding: 0.9375rem 0.625rem;
  margin-top: 1.25rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-right {
      display: flex;
      align-items: center;
    }
  }
  &-bottom {
    height: 12.5rem;
    background-color: #fff;
    color: black;
    margin-top: 0.625rem;
  }
}
.music {
  padding: 0.9375rem 0.625rem;
  margin-top: 1.25rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
  }
  &-item {
    display: flex;
    border-bottom: 0.0625rem solid #777;
    padding: 1.25rem 0;
    &-left {
      width: 4.375rem;
      height: 6.25rem;
      background-color: #fff;
      color: black;
      margin-right: 0.625rem;
    }
    &-right {
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      &-top {
        font-size: 1rem;
        text-align: left;
      }
      &-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #777;
        margin: 0.625rem 0;
        &-left {
          display: flex;
          align-items: center;
          &-img {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 1.25rem;
            background-color: #fff;
            color: black;
            margin-right: 0.3125rem;
          }
        }
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>