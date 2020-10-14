<template>
  <div>
    <!-- 播主页面 -->
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <router-link to="/podcastParticulars">
      <PodcasterClassify :data="user" />
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
      content: "找主播,找达人,找播主从这边开始吧",
      tab: ["行业榜", "涨粉榜", "蓝V榜", "成长榜"],
      //播主
      user: {
        user_img: require("../assets/a1.jpg"),
        user_name: "播主名称",
        user_fans: "232粉丝数量",
        uesr_link: "232赞数量",
        user_video: "232视频数量",
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