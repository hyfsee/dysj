<template>
  <div class="hot">
    <div class="hot-top">
      <div
        v-for="(item,index) in nav"
        @click="addClick(index)"
        :class="{active:index==active}"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="hot-bottom">
      <div v-for="(item,index) in navlist" :key="index" class="item">
        <div :class="{'active-font':index<3}" class="item-left">{{ index+1 }}</div>
        <div class="item-center">
          <div class="item-center-left">#</div>
          <div>穿搭</div>
        </div>
        <div class="item-right">467.5W人参加</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["最新", "最热", "黑马"],
      active: 0,
      navlist: [
        {
          name: "穿搭",
          id: 1,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 2,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 3,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 4,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 5,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 6,
          num: "467.5w",
        },
        {
          name: "穿搭",
          id: 7,
          num: "467.5w",
        },
      ],
    };
  },
  methods: {
    addClick(e) {
      this.active = e;
      console.log(e);
    },
  },
};
</script>

<style scoped lang='less'>
.hot {
  display: flex;
  flex-direction: column;
  color: #777;
  &-top {
    display: flex;
    background-color: #222;
    width: 375px;
    position: relative;
    right: 10px;
    font-size: 0.875rem;
    div {
      flex: 1;
      padding: 10px 0;
    }
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #555;
      align-items: center;
      justify-content: space-between;
      color: white;
      &-left {
        margin-right: 0.625rem;
        width: 1.875rem;
      }
      &-center {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.875rem;
        &-left {
          margin-right: 0.3125rem;
          color: orange;
        }
      }
      &-right {
        font-size: 0.875rem;
      }
    }
  }
}
.active {
  color: orange;
}
.active-font {
  color: orange;
  font-weight: 700;
  font-size: 1.25rem;
}
</style>