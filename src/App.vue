<template>
  <div
    class="app"
    :style="{
      'background-color': this.$store.state.bgcColor.background,
      color: this.$store.state.bgcColor.color,
    }"
  >
    <!-- top -->
    <Top
      @ifShow="ifShow"
      v-if="$route.meta.topShow"
      :style="{
        'background-color': this.$store.state.topColor.background,
        color: this.$store.state.topColor.color,
      }"
    />
    <!-- 固定定位占位符 -->
    <div style="height: 2.5rem"></div>

    <!-- 内容渲染 -->
    <router-view></router-view>

    <!-- footer -->
    <Footer
      :style="{
        'background-color': this.$store.state.btmColor.background,
        color: this.$store.state.btmColor.color,
      }"
      v-if="$route.meta.fotShow"
      @name="setName"
    />
  </div>
</template>

<script>
import Top from "./components/Top";
import Footer from "./components/Footer";
export default {
  components: {
    Top,
    Footer,
  },
  data() {
    return {
      name: "首页",
    };
  },
  methods: {
    setName(e) {
      this.name = e;
    },
    ifShow(e) {
      this.fotShow = e;
    },
  },
  watch: {
    //   "$route.path"(to) {
    //     if (to === "/") {
    //       this.fotShow = true;
    //       this.topShow = true;
    //       this.name = "首页";
    //       this.topIconShow = false;
    //     }
    //     if (to === "/podcast") {
    //       this.fotShow = true;
    //       this.topShow = true;
    //       this.topIconShow = false;
    //       this.name = "播主";
    //     }
    //     if (to === "/personage") {
    //       this.fotShow = true;
    //       this.topShow = true;
    //       this.topIconShow = false;
    //       this.name = "我的";
    //     }
    //     if (to === "/commodity") {
    //       this.fotShow = true;
    //       this.topShow = true;
    //       this.topIconShow = false;
    //       this.name = "商品";
    //     }
    //     if (to === "/streaming") {
    //       this.fotShow = true;
    //       this.topShow = true;
    //       this.topIconShow = false;
    //       this.name = "直播";
    //     }
    //     if (to === "/podcastParticulars") {
    //       this.fotShow = false;
    //       this.topShow = true;
    //       this.topIconShow = true;
    //       this.name = "播主详情";
    //     }
    //     if (to === "/commodityParticulars") {
    //       this.fotShow = false;
    //       this.topShow = true;
    //       this.topIconShow = true;
    //       this.name = "商品详情";
    //     }
    //     if (to === "/streamingParticulars") {
    //       this.fotShow = false;
    //       this.topShow = true;
    //       this.topIconShow = true;
    //       this.name = "直播详情";
    //     }
    //     if (to === "/MyRanking") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "监控";
    //     }
    //     if (to === "/ranking") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "直播监控";
    //     }
    //     if (to === "/RankingHistory") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "监控历史";
    //     }
    //     if (to === "/personalParticulars") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "个人中心";
    //     }
    //     if (to === "/motif") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "主题设置";
    //     }
    //     if (to === "/login") {
    //       this.fotShow = false;
    //       this.topShow = false;
    //     }
    //     if (to === "/search") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "搜索";
    //     }
    //     if (to === "/price") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "抖音号估值";
    //     }
    //     if (to === "/originality") {
    //       this.fotShow = false;
    //       this.topIconShow = true;
    //       this.name = "创意素材";
    //     }
    //   },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 隐藏滚动条 */
div::-webkit-scrollbar {
  width: 0;
  height: 0;
}
i {
  font-style: normal;
}
input {
  outline: none;
}
button {
  border: 0;
  outline: none;
}
a {
  color: inherit;
}
.app {
  padding: 0 0.625rem;
  height: 3000px;
  background-color: #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
