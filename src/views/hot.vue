<template>
  <div class="hot">
    <Tab @addActive="addActive" url="hot/hot" :data="hot" />
    <router-view v-if="true" :data="listNav"></router-view>
  </div>
</template>

<script>
import Tab from "../components/Tab";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      //分类数据
      hot: [
        {
          id: 1,
          name: "热门视频",
          children: [
            "美女",
            "帅哥",
            "搞笑",
            "美女",
            "帅哥",
            "搞笑",
            "美女",
            "帅哥",
            "搞笑",
            "美女",
            "帅哥",
            "搞笑",
          ],
        },
        {
          id: 2,
          name: "热门音乐",
        },
        {
          id: 3,
          name: "热门话题",
        },
      ],
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
    //把active传给父组件的事件
    addActive(active) {
      this.active = active;
    },
  },
};
</script>

<style>
.hot {
  display: flex;
  flex-direction: column;
}
</style>