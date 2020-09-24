<template>
  <van-tabs
    background="#111"
    title-inactive-color="#777"
    color="orange"
    line-width="3rem"
    v-model="active"
    @click="activeClick(active)"
    title-active-color="orange"
    class="top"
  >
    <van-tab v-for="item in data" :key="item.id" :title="item.name">
      <template v-if="revealClass">
        <!-- 开始渲染的时候不渲染全部分类 -->
        <div v-if="removeClick" class="two-circulation">
          <div @click="addOneClick" class="two-circulation-top" :class="{active:addClass === -1}">全部</div>
          <template v-for="(ite,index) in item.children">
            <div
              @click="addClick(index)"
              class="two-circulation-item"
              :class="{active:index==addClass}"
              :key="index"
              v-if="index < 5"
            >{{ite}}</div>
          </template>
          <van-icon class="two-circulation-bottom" @click="myClick" name="arrow-down" />
        </div>
        <!-- 点击后渲染整个分类 -->
        <div v-if="!removeClick" class="two-circulation">
          <div @click="addOneClick" :class="{active:addClass === -1}" class="two-circulation-top">全部</div>
          <div
            @click="addClick(index)"
            :class="{active:index==addClass}"
            class="two-circulation-item"
            v-for="(ite,index) in item.children"
            :key="index"
          >{{ite}}</div>
          <van-icon class="two-circulation-bottom" @click="myClick" name="arrow-up" />
        </div>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: ["data", "url"],
  data() {
    return {
      //tab栏,选中的index
      active: 0,
      //默认tab栏 下面有children
      revealClass: 1,
      //判断分类栏 的icon是否显示隐藏分类
      removeClick: true,
      //判断分类栏 的选中,添加高亮
      addClass: -1,
    };
  },
  methods: {
    //最外层的tab栏 添加点击事件
    activeClick(active) {
      //判断当前点击的tab栏里是否有children 没有就不显示
      this.revealClass = this.data[active].children ? 1 : 0;
      //在点击完后重置分类的高亮
      this.addClass = -1;
      this.$router.push({
        path: "/" + this.url + active,
      });
      this.$emit("addActive", active);
    },

    //分类栏 的icon按钮显示隐藏分类或者收起分类
    myClick() {
      this.removeClick = !this.removeClick;
    },

    //分类栏 的点击事件
    addClick(index) {
      this.addClass = index;
      this.$router.push({
        path: "/" + this.url + this.active,
      });
    },

    //分类栏 下全部按钮的点击事件
    addOneClick() {
      this.addClass = -1;
      // this.$router.push({
      //   path: "/" + this.url + this.active,
      // });
    },
  },
  mounted() {
    //从别的地方转跳进来的时候,获取地址
    let url = this.$route.fullPath;
    //获取地址栏的最后一位数字,并赋值给 active 使tab栏高亮
    this.active = Number(url.charAt(url.length - 1));
    //下面的分类栏渲染
    this.revealClass = this.data[this.active].children ? 1 : 0;
  },
  watch: {
    "$route.path"(to) {
      //根据转跳地址的最后一个字符串是多少,转跳的高亮也是多少
      let num = to.charAt(to.length - 1);
      if (num != "") {
        //最外层的tab栏的高亮
        this.active = Number(num);
        //下面的分类栏渲染
        this.revealClass = this.data[num].children ? 1 : 0;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.top {
  /deep/ .van-tabs__wrap {
    position: relative;
    width: 375px;
    right: 10px;
    border-bottom: 1px solid #111;
  }
  .two-circulation {
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #999;
    background-color: #222;
    font-size: 0.875rem;
    padding: 0.625rem 0 0.625rem 1rem;
    position: relative;
    right: 10px;
    &-top {
      margin-right: 1rem;
      margin-bottom: 0.3125rem;
    }
    &-item {
      display: flex;
      margin-right: 1rem;
      margin-bottom: 0.3125rem;
    }
    &-bottom {
      margin-bottom: 0.3125rem;
    }
  }
}
.active {
  color: orange;
}
.active-font {
  font-weight: 700;
  color: orange;
  font-style: italic;
  font-size: 1.125rem;
}
</style>