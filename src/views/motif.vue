<template >
  <div
    class="app"
    :style="{
      'background-color': item_color.background,
      color: item_color.color,
    }"
  >
    <div class="app-color">
      <div
        @click="colorClick(index)"
        :style="{ 'background-color': item.background, color: item.color }"
        class="app-color-item"
        v-for="(item, index) in color"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="app-center">
      <div class="app-center-left">
        <span>头部</span>
        <input @click="myClick" v-model="box_top" type="checkbox" />
      </div>
      <div class="app-center-center">
        <span>底部</span>
        <input v-model="box_btm" type="checkbox" />
      </div>
      <div class="app-center-right">
        <span>背景</span>
        <input v-model="box_bgc" type="checkbox" />
      </div>
    </div>
    <div class="app-bottom" @click="saveClick">保存</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: [
        {
          name: "灰色",
          background: "#333",
          color: "white",
        },
        {
          name: "红色",
          color: "white",
          background: "red",
        },
      ],
      item_color: this.$store.state.bgcColor,
      box_top: true,
      box_btm: true,
      box_bgc: true,
      active: 1,
    };
  },
  methods: {
    colorClick(index) {
      this.active = index;
      this.item_color = this.color[this.active];
    },
    saveClick() {
      if (this.box_top) {
        this.$store.state.topColor = this.color[this.active];
      }
      if (this.box_btm) {
        this.$store.state.btmColor = this.color[this.active];
      }
      if (this.box_bgc) {
        this.$store.state.bgcColor = this.color[this.active];
      }
      this.$router.push({
        path: "/",
      });
    },
    myClick() {
      console.log(!this.box_top);
    },
  },
};
</script>

<style scoped lang='less'>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-color {
    display: flex;
    width: 100%;
    margin-top: 0.625rem;
    &-item {
      width: 15%;
      height: 2.1875rem;
      margin-left: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border: 1px solid white;
    }
  }
  &-center {
    display: flex;
    margin-top: 3.125rem;
    width: 100%;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
    }
    &-center {
      display: flex;
      align-items: center;
    }
    &-right {
      display: flex;
      align-items: center;
    }
    input {
      width: 1.25rem;
      height: 1.25rem;
      margin-left: 0.625rem;
    }
  }
  &-bottom {
    width: 4.375rem;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    position: absolute;
    bottom: 2.25rem;
  }
}
</style>