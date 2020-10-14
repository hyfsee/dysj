<template>
  <div class="top">
    <div class="top-item">
      <div
        @click="activeClick(index)"
        :class="{active:active===index}"
        v-for="(item,index) in nav"
        :key="index"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["直播监控历史", "视频监控历史"],
      active: 0,
    };
  },
  methods: {
    activeClick(index) {
      this.active = index;
    },
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  &-item {
    width: 100%;
    display: flex;
    color: #777;
    div {
      flex: 1;
      padding: 0.625rem 0;
      height: 2.5rem;
      display: flex;
      justify-content: center;
    }
  }
}
.active {
  color: orange;
  border-bottom: 0.125rem solid;
}
</style>