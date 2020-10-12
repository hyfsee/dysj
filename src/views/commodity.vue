<template>
  <div>
    <!-- 商品页面 -->
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <router-link to="/commodityParticulars">
      <PodcasterClassify :data="industrial"/>
      </router-link>
  </div>
</template>

<script>
import Search from "../components/Search";
import Tab from "../components/Tab";
import PodcasterClassify from "../components/PodcasterClassify";
import HotlistCenter from "../components/HotlistCenter";
export default {
  components: {
    Search,
    Tab,
    PodcasterClassify,
    HotlistCenter,
  },
  data() {
    return {
      content: "找商品,看热销,搜爆品",
      tab: ["商品榜", "爆款榜", "视频榜", "小店榜"],
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
};
</script>

<style>
</style>