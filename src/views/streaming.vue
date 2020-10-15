<template>
  <!-- 直播页面 -->
  <div>
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <router-link to="/streamingParticulars">
      <StreamingClassify :data="online" />
    </router-link>
  </div>
</template>

<script>
import Search from "../components/Search";
import Tab from "../components/Tab";
import StreamingClassify from "../components/StreamingClassify";
import HotlistCenter from "../components/HotlistCenter";
export default {
  components: {
    Search,
    Tab,
    StreamingClassify,
    HotlistCenter,
  },
  data() {
    return {
      content: "找主播,找达人,找播主从这边开始吧",
      tab: ["销量榜", "人气榜", "达人榜", "商品榜"],
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
      listDay: ["日榜", "周榜", "月榜"],
      center: "筛选",
    };
  },
  methods: {},
};
</script>

<style>
</style>