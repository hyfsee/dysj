<template>
  <div class="hotlist-center">
    <div class="hotlist-center-left">
      <div @click="iconAddClick" class="hotlist-center-left-top">
        <!-- 在点击 日周月榜 的时候更改视图 -->
        <div class="hotlist-center-left-top-text">{{ listDay[listIndex] }}</div>
        <!-- 点击后显示对应的icon -->
        <van-icon v-if="!listDayIcon" name="arrow-down" />
        <van-icon v-if="listDayIcon" name="arrow-up" />
      </div>
      <!-- 判断点击后显示或者隐藏下拉框 -->
      <div v-if="listDayIcon" class="hotlist-center-left-bottom">
        <span
          @click="listDayAddClick(index)"
          :class="{ active: listIndex == index }"
          v-for="(item, index) in listDay"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="hotlist-center-right">
      {{ center }} <van-icon name="arrow-down" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["listDay", "center"],
  data() {
    return {
      //判断下拉按钮是否显示隐藏分类
      removeClick: true,
      //日周月下拉框选中的index,添加高亮
      listIndex: 0,
      //判断日周月是否隐藏 并且用这个判断点击的icon
      listDayIcon: false,
      actives: 0,
    };
  },
  methods: {
    //日月周榜 的点击切换图标事件
    iconAddClick() {
      this.listDayIcon = !this.listDayIcon;
    },

    //日月周榜下拉框 的点击事件高亮事件
    listDayAddClick(index) {
      this.listIndex = index;
      //在点击完后收起下拉框
      this.listDayIcon = false;
    },
  },
  watch: {
    "$route.path"(to) {
      //如果是转跳到hotlist的首页的时候,需要把center里面的内容渲染成首页的内容
      if (to == "/hotlist/hotlist0") {
        this.actives = 1;
      } else {
        this.actives = 0;
      }
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.hotlist-center {
  padding: 0.625rem 0;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.875rem;
  align-items: center;
  border-bottom: 0.0625rem solid #555;
  &-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &-top {
      display: flex;
      align-items: center;
      &-text {
        margin-right: 0.625rem;
      }
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      border: 0.0625rem solid #777;
      margin-top: 0.625rem;
      font-size: 0.75rem;
      background-color: #333;
      position: absolute;
      top: 0.9375rem;
      span {
        padding: 0.125rem 0.5rem;
        border-bottom: 0.0625rem solid #777;
      }
      & span:nth-child(3) {
        border: 0;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
  }
}
.active {
  color: orange;
}
</style>