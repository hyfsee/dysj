<template>
  <div>
    <div class="search">
      <input
        v-model="content"
        class="search"
        placeholder="输入抖音名称或抖音号,主页链接"
      />
      <van-icon
        v-if="show"
        @click="iconRemoveClick"
        class="search-icon-cross"
        name="cross"
      />
      <van-icon name="search" />
    </div>
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
export default {
  data() {
    return {
      show: false,
      content: "",
    };
  },
  methods: {
    iconRemoveClick() {
      this.content = "";
    },
  },
  watch: {
    content() {
      this.show = true;
      if (!this.content) {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped lang='less'>
.search {
  input {
    width: 100%;
    padding: 0.3125rem 0 0.3125rem 1rem;
    font-size: 12px;
    background-color: #fff;
    color: #777;
    margin: 0.625rem 0;
    border-radius: 1.25rem;
    border: 0;
    display: flex;
    align-items: center;
  }
  .van-icon-search {
    margin-right: 10px;
    position: absolute;
    right: 0.9375rem;
    top: 3.3125rem;
    color: #777;
    font-size: 1.25rem;
  }

  .van-icon-cross {
    font-size: 1rem;
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
    background-color: #333;
    position: absolute;
    right: 3.75rem;
    top: 3.4375rem;
    color: white;
  }
}
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
          &-style {
            margin-left: 10px;
            border: 1px solid green;
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