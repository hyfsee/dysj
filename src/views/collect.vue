<template>
  <div>
    <Tab :tab="tab" />
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
      tab: ["商品", "播主", "视频", "音乐", "话题"],
    };
    
  },
};
</script>

<style>
</style>