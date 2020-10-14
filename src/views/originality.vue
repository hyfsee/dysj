<template>
  <div>
    <!-- 创意素材页面 -->
    <Tab :tab="tab" />
    <Search :content="content" />
    <div class="center">
      <div class="center-top">
        <div class="center-top-left">
          <div>
            全部分类
            <van-icon name="arrow-down" />
          </div>
          <div>
            24小时
            <van-icon name="arrow-down" />
          </div>
          <div>
            综合排序
            <van-icon name="arrow-down" />
          </div>
        </div>
        <div class="center-top-right">
          <van-icon name="filter-o" />筛选
        </div>
      </div>
      <router-link to="/videoParticulars" class="podacster">
        <div class="podacster-left">img</div>
        <div class="podacster-right">
          <div class="podacster-right-top">抖音发短视频就可以赚可以赚钱,认真钱,认真看完</div>
          <div class="podacster-right-center">
            <div class="podacster-right-center-left">
              <div class="podacster-right-center-left-img">img</div>无就像
            </div>
            <div class="podacster-right-center-right">17小时前</div>
          </div>
          <div class="podacster-right-bottom">
            <div>
              <van-icon name="good-job-o" />52.5w
            </div>
            <div>
              <van-icon name="more-o" />2.0w
            </div>
            <div>
              <van-icon name="share-o" />11.3w
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <router-link to="/musicParticulars" class="music">
      <div class="music-item">
        <div class="music-item-left">img</div>
        <div class="music-item-right">
          <div class="music-item-right-top">不过人间</div>
          <div class="music-item-right-center">时长:30秒</div>
          <div class="music-item-right-bottom">参与人数:362.8w</div>
        </div>
      </div>
    </router-link>

    <div class="topic">
      <router-link to="/wordParticulars" class="topic-item">
        <div class="topic-item-left">
          <van-icon name="orders-o" />我的生活日记
        </div>
        <div class="topic-item-right">525.0w参加</div>
      </router-link>
      <router-link to="/wordParticulars" class="topic-item">
        <div class="topic-item-left">
          <van-icon name="orders-o" />我的生活日记
        </div>
        <div class="topic-item-right">525.0w参加</div>
      </router-link>
      <router-link to="/wordParticulars" class="topic-item">
        <div class="topic-item-left">
          <van-icon name="orders-o" />我的生活日记
        </div>
        <div class="topic-item-right">525.0w参加</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import Search from "../components/Search";
export default {
  components: {
    Tab,
    Search
  },
  data() {
    return {
      tab: ["视频", "音乐", "话题"],
      content: "输入你要找的热门视频吧"
    };
  }
};
</script>

<style scoped lang='less'>
.center {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  &-top {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
    &-left {
      display: flex;
      div {
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }
    }
    &-right {
      display: flex;
      align-items: center;
    }
  }
}

.podacster {
  display: flex;
  padding: 0.625rem;
  background-color: #fff;
  &-left {
    width: 4rem;
    height: 5rem;
    background-color: red;
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
        align-items: center;
        &-img {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 1.25rem;
          background-color: red;
        }
      }
    }
    &-bottom {
      display: flex;
      font-size: 0.75rem;
      justify-content: space-between;
      width: 80%;
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

.music {
  &-item {
    display: flex;
    padding: 0.625rem;
    border: 0.0625rem solid #777;
    margin-top: 0.625rem;
    &-left {
      width: 4.375rem;
      height: 4.375rem;
      border-radius: 4.375rem;
      background-color: #fff;
      color: black;
      margin-right: 0.625rem;
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #777;
      font-size: 0.875rem;
      &-top {
        font-size: 1rem;
        color: white;
        margin-bottom: 0.625rem;
      }
    }
  }
}

.topic {
  &-item {
    padding: 0.625rem;
    border: 0.0625rem solid #777;
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
    }
  }
}
</style>