<template>
  <schart
    style="color: white"
    :canvasId="canvasId"
    :type="type"
    :width="width"
    :data="data"
    :options="options"
  >
  </schart>
</template>

<script>
import schart from "vue-schart";
export default {
  components: {
    schart,
  },
  data() {
    return {
      canvasId: "myCanvas",
      type: "bar",
      width: 600,
      height: 500,
      data: [
        { name: "这", value: 1 },
        { name: "是", value: 2 },
        { name: "一", value: 3 },
        { name: "个", value: 4 },
        { name: "例", value: 5 },
        { name: "子", value: 6 },
      ],
      //可选参数
      options: {
        title: "Total sales of stores in recent years",
      },
    };
  },
  methods: {
    changeData() {
      // 整个 data 被重新赋值时
      this.data = [
        { name: "短袖", value: 1200 },
        { name: "休闲裤", value: 1222 },
        { name: "连衣裙", value: 1283 },
        { name: "外套", value: 1314 },
      ];
      // data 里一个属性值被修改时
      this.$set(this.data, 1, { name: "短裙", value: 500 });
    },
  },
};
</script>

<style>
</style>