<template>
  <div>
    <!-- top -->
    <Top @ifShow="ifShow" :show="show" :data="name" />
    <!-- 固定定位占位符 -->
    <div style="height:2.5rem"></div>
    <router-view class="app"></router-view>
    <Footer v-if="show" @name="setName" />
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
      show: true,
    };
  },
  methods: {
    setName(e) {
      this.name = e;
    },
    ifShow(e) {
      this.show = e;
    },
  },
  watch: {
    "$route.path"(to) {
      if (to === "/MyRanking") {
        this.show = false;
        this.name = "监控";
      }
      if (to === "/RankingHistory") {
        this.show = false;
        this.name = "监控历史";
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
