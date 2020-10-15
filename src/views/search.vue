<template>
  <!-- 搜索页面 -->
  <div>
    <div class="search">
      <div class="search-icon">
        <van-icon class="search-icon-search" name="search" />
        <input
          type="text"
          class="search-ipt"
          placeholder="搜索播主,商品,直播间,视频,小店"
          v-model="content"
        />
        <van-icon
          v-if="show"
          @click="iconRemoveClick"
          class="search-icon-cross"
          name="cross"
        />
      </div>
      <router-link to="/searchParticulars" class="search-btn">搜索</router-link>
    </div>
    <div class="history">
      <div class="history-top">
        搜索历史
        <van-icon @click="historyRemoveClick" name="delete" />
      </div>
      <div class="history-bottom">
        <div
          class="history-bottom-item"
          v-for="(item, index) in historyContent"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <Tab :tab="tab" />
    <div class="nav">
      <div class="nav-item">
        <div class="nav-item-left">
          <div class="nav-item-style">1</div>
          <div class="nav-item-img">
            <img
              style="width: 100%; height: 100%"
              src="../assets/a1.jpg"
              alt=""
            />
          </div>
          <div class="nav-item-txt">央视新闻</div>
        </div>
        <div class="nav-item-right">粉丝数:9733.1w</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      searchText: "",
      content: "",
      show: false,
      historyContent: [
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
        "陈赫",
      ],
      tab: ["热推播主", "热推商品", "热推直播", "热推视频", "热推店铺"],
    };
  },
  methods: {
    iconRemoveClick() {
      this.content = "";
    },
    historyRemoveClick() {
      this.historyContent = "";
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
.history {
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0 1.875rem;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
  }
  &-bottom {
    display: flex;
    flex-wrap: wrap;
    &-item {
      color: #111;
      font-size: 0.875rem;
      background-color: #888;
      padding: 0.1875rem 0.4375rem;
      margin: 0.625rem 0.625rem 0 0;
    }
  }
}
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
.nav {
  margin-top: 1.25rem;
  &-item {
    padding: 0.625rem 0.625rem;
    color: black;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
      .nav-item-img {
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 1.875rem;
        margin: 0 0.3125rem;
        background-color: red;
      }
    }
    &-right {
      font-size: 0.875rem;
      color: #555;
    }
  }
}
</style>