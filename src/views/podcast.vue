<template>
  <div>
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <PodcasterClassify :data="industrial" />
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
      content: "找主播,找达人,找播主从这边开始吧",
      tab: ["行业榜", "涨粉榜", "蓝V榜", "成长榜"],
      //行业榜数据
      industrial: {
        name: "浣语",
        img: "img",
        fans: "22.4w",
        praise: "114.3w",
        exponent: "1666.4",
      },
      //日周月下拉框数据
      listDay: ["日榜", "周榜", "月榜"],
      center: "全部",
    };
  },
};
</script>

<style scoped lang='less'>
</style>