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
      v-if="topShow"
      :fotShow="fotShow"
      :data="name"
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
      v-if="fotShow"
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
      fotShow: true,
      topShow: true,
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
    "$route.path"(to) {
      if (to === "/MyRanking") {
        this.fotShow = false;
        this.name = "监控";
      }
      if (to === "/RankingHistory") {
        this.fotShow = false;
        this.name = "监控历史";
      }
      if (to === "/motif") {
        this.fotShow = false;
        this.name = "主题设置";
      }
      if (to === "/") {
        this.fotShow = true;
        this.topShow = true;
        this.name = "首页";
      }
      if (to === "/login") {
        this.fotShow = false;
        this.topShow = false;
      }
      if (to === "/search") {
        this.fotShow = false;
        this.name = "搜索";
      }
    },
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
  height: 4000px;
  background-color: #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
