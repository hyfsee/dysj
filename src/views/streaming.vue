<template>
  <!-- 直播页面 -->
  <div>
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <router-link to="/streamingParticulars">
      <StreamingClassify :data="industrial" />
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
      //行业榜数据
      industrial: {
        name: "浣语",
        img: "img",
        fans: "22.4w",
        praise: "114.3w",
        exponent: "1666.4",
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