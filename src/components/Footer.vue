<template>
  <van-tabbar v-model="active" active-color="#febc7b" inactive-color="white">
    <!-- 手动设置不可点击按钮 :class="{disable:index==active}" -->
    <van-tabbar-item
      @click="handleClick(item.id)"
      v-for="item in tab"
      :key="item.id"
      replace
      :icon="item.icon"
      :to="'/' + item.path"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: this.$store.state.active,
      tab: [
        {
          id: 0,
          icon: "home-o",
          name: "首页",
          path: "",
        },
        {
          id: 1,
          icon: "smile-o",
          name: "播主",
          path: "podcast",
        },
        {
          id: 2,
          icon: "bag-o",
          name: "商品",
          path: "commodity",
        },
        {
          id: 3,
          icon: "play-circle-o",
          name: "直播",
          path: "streaming",
        },
        {
          id: 4,
          icon: "user-o",
          name: "我的",
          path: "personage",
        },
      ],
    };
  },
  methods: {
    handleClick(e) {
      //这是获取的文字 传给父组件
      this.$emit("name", this.tab[e].name);
      //有底部框
      this.$emit("ifShow", 1);
    },
  },
  watch: {
    active() {
      this.$store.state.active = this.active;
    },
  },
};
</script>

<style scoped>
.van-tabbar {
  background-color: #222;
}
/* 给按钮添加:不可点击事件 */
.disable {
  pointer-events: none;
}
</style>