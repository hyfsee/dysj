<template>
  <div class="hotlist">
    <Tab @addActive="addActive" url="hotlist/hotlist" ref="header" :data="hotlist" />
    <Center :center="center" :active="active" />
    <router-view :data="listNav"></router-view>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import Center from "../components/HotlistCenter";
export default {
  components: {
    Tab,
    Center,
  },
  data() {
    return {
      //标签页数据
      hotlist: [
        {
          id: 1,
          name: "行业榜",
          children: [
            "美女",
            "帅哥",
            "搞笑",
            "感情",
            "剧情",
            "美女",
            "帅哥",
            "搞笑",
            "感情",
            "剧情",
            "美女",
            "帅哥",
            "搞笑",
            "感情",
            "剧情",
            "美女",
            "帅哥",
            "搞笑",
            "感情",
            "剧情",
          ],
        },
        {
          id: 2,
          name: "涨粉榜",
          children: ["美女", "帅哥", "搞笑", "感情", "剧情"],
        },
        {
          id: 3,
          name: "商品排行",
        },
        {
          id: 4,
          name: "电商视频",
        },
        {
          id: 5,
          name: "直播带货",
        },
      ],
      //中间的字
      center: ["飞瓜指数", "粉丝增量", "浏览量增量", "点赞增量", "直播销量"],
      //榜单数据
      listNav: [
        {
          id: 1,
          name: "央视新闻",
          num: "1640.1",
          img: "#",
        },
        {
          id: 2,
          name: "央视新闻",
          num: "1640.1",
          img: "#",
        },
        {
          id: 3,
          name: "央视新闻",
          num: "1640.1",
          img: "#",
        },
        {
          id: 4,
          name: "央视新闻",
          num: "1640.1",
          img: "#",
        },
        {
          id: 5,
          name: "央视新闻",
          num: "1640.1",
          img: "#",
        },
      ],
      active: 0,
    };
  },
  methods: {
    //日月周榜 的图标点击事件
    iconAddClick() {
      this.listDayIcon = !this.listDayIcon;
    },

    //日月周榜下拉框 的点击事件高亮事件
    listDayAddClick(index) {
      this.listIndex = index;
      //在点击完后收起下拉框
      this.listDayIcon = false;
    },

    //把active传给父组件的事件
    addActive(active) {
      this.active = active;
    },
  },
  mounted() {},
  
};
</script>

<style scoped lang='less'>
.hotlist {
  display: flex;
  flex-direction: column;
}
.active {
  color: orange;
}
.active-font {
  font-weight: 700;
  color: orange;
  font-style: italic;
  font-size: 1.125rem;
}
</style>