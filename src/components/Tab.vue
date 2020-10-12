<template>
  <van-tabs
    background="#333"
    line-width="2rem"
    title-inactive-color="#888"
    title-active-color="white"
    v-model="active"
  >
    <van-tab v-for="(item, index) in tab" :key="index" :title="item"></van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: ["tab"],
  data() {
    return {
      //tab栏,选中的index
      active: 0,
    };
  },
};
</script>

<style lang='less' scoped>
.van-tabs {
  width: 100%;
}
</style>