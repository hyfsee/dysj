<template>
  <div>
    <!-- 商品页面 -->
    <Search :content="content" />
    <Tab :tab="tab" />
    <HotlistCenter :listDay="listDay" :center="center" />
    <router-link to="/commodityParticulars">
      <PodcasterClassifyCommodity :data="order" />
    </router-link>
  </div>
</template>

<script>
import Search from "../components/Search";
import Tab from "../components/Tab";
import PodcasterClassifyCommodity from "../components/PodcasterClassifyCommodity";
import HotlistCenter from "../components/HotlistCenter";
export default {
  components: {
    Search,
    Tab,
    PodcasterClassifyCommodity,
    HotlistCenter,
  },
  data() {
    return {
      content: "找商品,看热销,搜爆品",
      tab: ["商品榜", "爆款榜", "视频榜", "小店榜"],
      //商品
      order: {
        order_img: require("../assets/a1.jpg"),
        order_name: "商品名称",
        order_sale: "232销量",
        order_views: "232浏览量",
        order_zh: "232转换率",
      },
      listDay: ["日榜", "周榜", "月榜"],
      center: "筛选",
    };
  },
};
</script>

<style>
</style>