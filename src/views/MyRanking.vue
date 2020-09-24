<template>
  <div class="myranking">
    <div class="myranking-top">
      <div class="myranking-top-left">
        <div
          @click="addActive(index)"
          :class="{active:active==index}"
          class="myranking-top-left-item"
          v-for="(item,index) in nav"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="myranking-top-right" @click="iconClick">
        <div class="myranking-top-right-top">
          {{time[showActive]}}
          <van-icon v-if="show" name="arrow-down" />
          <van-icon v-if="!show" name="arrow-up" />
        </div>
        <div v-if="!show" class="myranking-top-right-bottom">
          <div
            @click="showClick(index)"
            :class="{active:showActive===index}"
            v-for="(item,index) in time"
            :key="index"
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="myranking-bottom">添加抖音号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["新增粉丝", "新增点赞", "新增作品"],
      time: ["今日", "昨日"],
      active: 0,
      //是否显示隐藏
      show: true,
      showActive: 0,
    };
  },
  methods: {
    //把index传出去,使当前点击的高亮
    addActive(index) {
      this.active = index;
    },
    //这是一个icon的点击事件
    iconClick() {
      this.show = !this.show;
    },
    //点击隐藏的数据,并传出来渲染到视图
    showClick(index) {
      this.showActive = index;
    },
  },
};
</script>

<style scoped lang='less'>
.myranking {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-top {
    display: flex;
    color: #999;
    background-color: #111;
    width: 23.4375rem;
    justify-content: space-between;
    padding: 0 0.625rem;
    &-left {
      display: flex;
      flex: 1;
      align-items: center;
      margin-right: 0.9375rem;
      &-item {
        flex: 1;
        padding: 0.625rem 0;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-top {
        display: flex;
        color: orange;
        .van-icon {
          margin-left: 10px;
          display: flex;
          align-items: center;
        }
      }
      &-bottom {
        position: absolute;
        top: 45px;
        background-color: #333;
        border: 1px solid #555;
        border-bottom: 0;
        div {
          padding: 5px 10px;
          border-bottom: 1px solid #555;
        }
      }
    }
  }
  &-bottom {
    width: 9.375rem;
    height: 1.875rem;
    line-height: 1.875rem;
    position: absolute;
    background-color: orange;
    color: white;
    bottom: 20px;
  }
}
.active {
  color: orange;
  border-bottom: 2px solid;
}
</style>