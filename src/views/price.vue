<template>
  <div>
    <Search :content="content" />
    <div class="center">
      <div class="center-item">
        <div class="center-item-left">
          <div class="center-item-left-left">img</div>
          <div class="center-item-left-right">
            <div class="center-item-left-right-top">
              guansda
              <div class="center-item-left-right-top-style">明星</div>
            </div>
            <div class="center-item-left-right-center">抖音:1231242</div>
            <div class="center-item-left-right-bottom">粉丝:2131w</div>
          </div>
        </div>
        <van-icon name="passed" />
      </div>
    </div>
    <div class="bottom">立即估值</div>
  </div>
</template>

<script>
import Search from "../components/Search";
export default {
  components: {
    Search
  },
  data() {
    return {
      content: "输入抖音名称或抖音号,主页链接"
    };
  }
};
</script>

<style scoped lang='less'>
.center {
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #777;
    &-left {
      display: flex;
      &-left {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        background-color: #fff;
        color: black;
        margin-right: 10px;
      }
      &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
        color: #777;
        &-top {
          color: white;
          display: flex;
          align-items: center;
          font-size: 16px;
          margin-bottom: 10px;
          &-style{
            margin-left: 10px;
            border:1px solid green;
            color: green;
          }
        }
      }
    }
  }
}
.bottom {
  position: absolute;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  color: black;
  bottom: 15%;
  left: 30%;
}
</style>