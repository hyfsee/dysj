<template>
  <div>
    <div class="search">
      <div class="search-icon">
        <van-icon class="search-icon-search" name="search" />
        <input
          type="text"
          class="search-ipt"
          placeholder="请输入昵称,抖音号,主页链接"
          v-model="content"
        />
        <van-icon
          v-if="show"
          @click="iconRemoveClick"
          class="search-icon-cross"
          name="cross"
        />
      </div>
      <button class="search-btn">搜索</button>
    </div>
    <div class="center">请搜索你想要添加的抖音播主</div>

    <div class="nav">
      <div class="nav-item">
        <div class="nav-item-left">
          <img
            class="nav-item-left-left"
            style="border-radius: 100%"
            :src="user.user_img"
            alt=""
          />
          <div class="nav-item-left-right">
            <div class="nav-item-left-right-top"></div>
            <div>抖音:{{ user.user_id }}</div>
            <div>粉丝:{{ user.user_fans }}</div>
          </div>
        </div>

        <van-checkbox v-model="checked"></van-checkbox>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-btn">立即添加</div>
      免费版用户最多添加一个抖音号
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      content: "",
      checked: false,
      user: {
        user_img: require("../assets/a1.jpg"),
        user_name: "名称",
        user_id: "232抖音号",
        user_fans: "232粉丝数量",
      },
    };
  },
};
</script>

<style scoped lang='less'>
.search {
  height: 3.125rem;
  display: flex;
  font-size: 0.875rem;
  padding: 0.625rem 0;
  &-icon {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    &-search {
      padding: 0 0.5rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 1.25rem 0 0 1.25rem;
      height: 100%;
    }
    input {
      flex: 1;
      color: black;
      border: 0;
      height: 100%;
      font-size: 0.75rem;
    }
    &-cross {
      font-size: 1rem;
      height: 1.25rem;
      width: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1.25rem;
      background-color: #333;
      position: absolute;
      right: 4.375rem;
    }
  }
  &-btn {
    width: 3.125rem;
    background-color: orange;
    color: white;
    display: flex;
    height: 100%;
    line-height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 0 1.25rem 1.25rem 0;
  }
}
.bottom {
  position: absolute;
  bottom: 4.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 0.875rem;
  align-items: center;
  color: #777;
  &-btn {
    padding: 0.625rem 3.125rem;
    border: 0.0625rem solid white;
    margin-bottom: 0.625rem;
  }
}
.nav {
  &-item {
    display: flex;
    padding: 1.25rem;
    justify-content: space-between;
    border: 0.0625rem solid #777;
    &-left {
      display: flex;
      &-left {
        width: 3.75rem;
        height: 3.75rem;
        margin-right: 0.625rem;
      }
      &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.75rem;
        &-top {
          font-size: 1rem;
          margin-bottom: 0.625rem;
        }
      }
    }
    &-right {
      width: 1.25rem;
      height: 1.25rem;
      border: 0.0625rem solid #777;
      border-radius: 1.25rem;
    }
  }
}
</style>