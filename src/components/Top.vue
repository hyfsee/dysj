<template>
  <div class="top">
    <div class="top-top">
      <van-icon
        @click="showClick"
        v-if="$route.meta.topIconShow"
        name="arrow-left"
      />
      飞瓜数据-{{ $route.meta.name }}
    </div>
    <div class="top-icon">
      <van-icon style="margin-right: 0.625rem" name="apps-o" />
      <van-icon name="clear" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "topIconShow"],
  data() {
    return {};
  },
  methods: {
    showClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  background-color: #111;
  color: white;
  align-items: center;
  padding: 0.625rem;
  height: 2.5rem;
  width: 100%;
  position: fixed;
  right: 0;
  z-index: 99;
  &-top {
    display: flex;
    align-items: center;
    line-height: 1.375rem;
    .van-icon {
      margin-right: 0.625rem;
    }
  }
  &-icon {
    display: flex;
    align-items: center;
  }
}
</style>