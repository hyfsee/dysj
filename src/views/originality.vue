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
        <div class="center-top-right"><van-icon name="filter-o" />筛选</div>
      </div>
      <router-link to="/videoParticulars">
        <PodcasterClassifyImg :data="video" />
      </router-link>
    </div>

    <router-link to="/musicParticulars" class="music">
      <div class="music-item">
        <div class="music-item-left">
          <img
            style="width: 100%; height: 100%"
            :src="music.music_img"
            alt=""
          />
        </div>
        <div class="music-item-right">
          <div class="music-item-right-top">{{ music.music_name }}</div>
          <div class="music-item-right-center">
            时长:{{ music.music_length }}
          </div>
          <div class="music-item-right-bottom">
            参与人数:{{ music.music_num }}
          </div>
        </div>
      </div>
    </router-link>

    <div class="topic">
      <router-link to="/wordParticulars" class="topic-item">
        <div class="topic-item-left">
          <van-icon name="orders-o" />{{ topic.title }}
        </div>
        <div class="topic-item-right">{{ topic.title_num }}参加</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import Search from "../components/Search";
import PodcasterClassifyImg from "../components/PodcasterClassifyImg";
export default {
  components: {
    Tab,
    Search,
    PodcasterClassifyImg,
  },
  data() {
    return {
      tab: ["视频", "音乐", "话题"],
      content: "输入你要找的热门视频吧",
      video: {
        video_img: require("../assets/a1.jpg"),
        video_name: "标题",
        video_username: "用户名",
        video_data: "发布时间",
        video_like: "232点赞数",
        video_share: "232分享数",
        video_comment: "232评论数",
      },
      music: {
        music_img: require("../assets/a1.jpg"),
        music_name: "名称",
        music_length: "30秒",
        music_num: "232人数",
      },
      topic: {
        title: "标题",
        icon: "图标",
        title_num: "232人数",
      },
    };
  },
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