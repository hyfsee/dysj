<template>
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
      <button class="search-btn">搜索</button>
    </div>
    <Tab :tab="tab" />
    <div>
      <div class="list">
        <div class="list-top">播主</div>
        <div class="list-center">
          <div class="list-center-item">
            <PodcasterClassify :data="user" />
            <PodcasterClassify :data="user" />
          </div>
        </div>
        <div class="list-bottom">查看更多</div>
      </div>
      <div class="list">
        <div class="list-top">商品</div>
        <div class="list-center">
          <div class="list-center-item">
            <PodcasterClassifyCommodity :data="order" />
            <PodcasterClassifyCommodity :data="order" />
          </div>
        </div>
        <div class="list-bottom">查看更多</div>
      </div>
      <div class="list">
        <div class="list-top">直播</div>
        <div class="list-center">
          <div class="list-center-item">
            <StreamingClassify :data="online" />
            <StreamingClassify :data="online" />
          </div>
        </div>
        <div class="list-bottom">查看更多</div>
      </div>
      <div class="list">
        <div class="list-top">视频</div>
        <div class="list-center">
          <div class="list-center-item">
            <PodcasterClassifyImg :data="video" />
            <PodcasterClassifyImg :data="video" />
          </div>
        </div>
        <div class="list-bottom">查看更多</div>
      </div>
      <div class="list">
        <div class="list-top">小店</div>
        <div class="list-center">
          <div
            class="list-center-item"
          >
            <PodcasterClassifyShop :data="store" />
            <PodcasterClassifyShop :data="store" />
          </div>
        </div>
        <div class="list-bottom">查看更多</div>
      </div>
    </div>
    <div>
      <PodcasterClassify :data="user" />
      <PodcasterClassifyCommodity :data="order" />
      <StreamingClassify :data="online" />
      <PodcasterClassifyImg :data="video" />
      <PodcasterClassifyShop :data="store" />
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import PodcasterClassify from "../components/PodcasterClassify";
import PodcasterClassifyCommodity from "../components/PodcasterClassifyCommodity";
import StreamingClassify from "../components/StreamingClassify";
import PodcasterClassifyImg from "../components/PodcasterClassifyImg";
import PodcasterClassifyShop from "../components/PodcasterClassifyShop";
export default {
  components: {
    Tab,
    PodcasterClassify,
    PodcasterClassifyCommodity,
    StreamingClassify,
    PodcasterClassifyImg,
    PodcasterClassifyShop,
  },
  data() {
    return {
      content: "",
      show: false,
      tab: ["全部", "播主", "商品", "直播", "视频", "小店"],
      //播主
      user: {
        user_img: require("../assets/a1.jpg"),
        user_name: "播主名称",
        user_fans: "232粉丝数量",
        uesr_link: "232赞数量",
        user_video: "232视频数量",
      },
      //商品
      order: {
        order_img: require("../assets/a1.jpg"),
        order_name: "商品名称",
        order_sale: "232销量",
        order_views: "232浏览量",
        order_zh: "232转换率",
      },
      //直播
      online: {
        online_img: require("../assets/a1.jpg"),
        online_name: "直播标题",
        online_updata: "直播时间",
        online_username: "用户名称",
        online_sale: "232销量",
        online_money: "232数量",
        online_num: "232人数",
      },
      //视频
      video: {
        video_img: require("../assets/a1.jpg"),
        video_name: "标题",
        video_username: "用户名",
        video_data: "发布时间",
        video_like: "232点赞数",
        video_share: "232分享数",
        video_comment: "232评论数",
      },
      //小店
      store: {
        store_img: require("../assets/a1.jpg"),
        store_name: "名称",
        store_sale: "232销量",
        store_views: "232流量",
        video_hot: "232推荐",
      },
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
.list {
  margin-top: 0.625rem;
  padding: 0 0.625rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
    padding: 0.625rem;
    border-bottom: 0.0625rem solid #777;
  }
  &-bottom {
    padding: 1.25rem;
    font-size: 0.875rem;
  }
}
</style>