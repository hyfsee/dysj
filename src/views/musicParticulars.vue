<template>
  <div>
    <div class="top">
      <div class="top-top">
        <div class="top-top-left">img</div>
        <div class="top-top-right">
          <div class="top-top-right-top">不过人间</div>
          <div class="top-top-right-center">
            时长30秒
            <div>参与人数374.4w</div>
          </div>
          <div class="top-top-right-bottom">
            <div class="top-top-right-bottom-item">生活</div>
          </div>
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
          <div style="color:green;margin-left:5px">64.48%</div>
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  &-top {
    display: flex;
    width: 100%;
    &-left {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background-color: #fff;
      color: black;
      margin-right: 10px;
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 14px;
      &-top {
        font-size: 16px;
      }
      &-center {
        display: flex;
        color: #777;
        margin-top: 10px;
        div {
          margin-left: 10px;
        }
      }
      &-bottom {
        display: flex;
        flex-wrap: wrap;
        div {
          border: 1px solid green;
          color: green;
          padding: 2px 5px;
        }
      }
    }
  }
  &-bottom {
    background-color: green;
    color: white;
    width: 40%;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
  }
}
.num {
  padding: 15px 10px;
  margin-top: 20px;
  border: 1px solid #777;
  &-top {
    display: flex;
  }
  &-bottom {
    height: 200px;
    background-color: #fff;
    color: black;
    margin-top: 10px;
  }
}
.distribution {
  padding: 15px 10px;
  margin-top: 20px;
  border: 1px solid #777;
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
    height: 200px;
    background-color: #fff;
    color: black;
    margin-top: 10px;
  }
}
.music {
  padding: 15px 10px;
  margin-top: 20px;
  border: 1px solid #777;
  &-top {
    display: flex;
  }
  &-item {
    display: flex;
    border-bottom: 1px solid #777;
    padding: 20px 0;
    &-left {
      width: 70px;
      height: 100px;
      background-color: #fff;
      color: black;
      margin-right: 10px;
    }
    &-right {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      flex: 1;
      &-top {
        font-size: 16px;
        text-align: left;
      }
      &-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #777;
        margin: 10px 0;
        &-left {
          display: flex;
          align-items: center;
          &-img {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background-color: #fff;
            color: black;
            margin-right: 5px;
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