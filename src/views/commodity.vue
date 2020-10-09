<template>
  <div>
    <Search :content="content" />
    <Tab :tab="tab" />
    <PodcasterClassify :data="industrial" />
  </div>
</template>

<script>
import Search from "../components/Search";
import Tab from "../components/Tab";
import PodcasterClassify from "../components/PodcasterClassify";
export default {
  components: {
    Search,
    Tab,
    PodcasterClassify,
  },
  data() {
    return {
      content: "找主播,找达人,找播主从这边开始吧",
      tab: ["商品榜", "爆款榜", "视频榜", "小店榜"],
      industrial: {
        name: "浣语",
        img: "img",
        fans: "22.4w",
        praise: "114.3w",
        exponent: "1666.4",
      },
    };
  },
};
</script>

<style>
</style>