<template>
  <!-- 直播详情 -->
  <div>
    <div class="top">
      <div class="top-left">img</div>
      <div class="top-right">
        <div class="top-right-top">
          <div class="top-right-top-txt">阁主</div>
          <div>感谢大家的祝福</div>
        </div>
        <div class="top-right-bottom">
          <div>抖音号:123456789</div>
          <div>粉丝数:42.3w</div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-left">img</div>
      <div class="center-right">
        <div class="center-right-txt">浮力专场10月7日婚礼</div>
        <div class="center-right-span">开播时间:2020-10-10</div>
        <div class="center-right-span">开播时长:17小时5分5秒</div>
        <div class="center-right-span">平均停留:2小时5分52秒</div>
        <div class="center-right-span">
          直播分类:
          <div class="center-right-span-style">珠宝配饰</div>
          <div class="center-right-span-color">男装女装</div>
        </div>
      </div>
    </div>
    <div class="moods">
      <div class="moods-top">人气数据</div>
      <div class="podacster">
        <div>
          <div class="podacster-num">46.2w</div>
          <div>粉丝数</div>
        </div>
        <div>
          <div class="podacster-num">13.0w</div>
          <div>粉丝数</div>
        </div>
        <div>
          <div class="podacster-num">7.5w</div>
          <div>粉丝数</div>
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
  display: flex;
  padding: 10px;
  &-left {
    width: 70px;
    height: 70px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    &-top {
      display: flex;
      align-items: center;
      &-txt {
        margin-right: 10px;
      }
    }
    &-bottom {
      display: flex;
      font-size: 14px;
      color: #777;
      justify-content: space-between;
    }
  }
}
.center {
  display: flex;
  padding: 20px 10px;
  &-left {
    width: 70px;
    height: 100px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-txt {
      margin-bottom: 10px;
    }
    &-span {
      font-size: 12px;
      color: #777;
      display: flex;
      align-items: center;
      &-style {
        background-color: green;
        color: white;
        padding: 1px 4px;
      }
      &-color {
        background-color: pink;
        color: white;
        padding: 1px 4px;
        margin-left: 10px;
      }
    }
  }
}
.moods {
  .podacster {
    display: flex;
    font-size: 0.75rem;
    margin-top: 0.625rem;
    justify-content: space-around;
    width: 100%;
    &-num {
      font-size: 16px;
      color: green;
    }
  }
}
</style>