<template>
  <!-- 这是热门视频的页面 -->
  <div class="hot">
    <div class="hot-top">
      <div class="hot-top-left">
        <div class="hot-top-left-show" @click="timeAddClick">
          <div>{{ time[timeStyle] }}</div>
          <van-icon v-if="!timeIcon" name="arrow-down" />
          <van-icon v-if="timeIcon" name="arrow-up" />
        </div>
        <div v-if="timeIcon" class="hot-top-left-if">
          <span
            @click="timeShowClick(index)"
            :class="{active:timeStyle==index}"
            v-for="(item,index) in time"
            :key="index"
          >{{item}}</span>
        </div>
      </div>
      <i class="hot-top-center">|</i>
      <div class="hot-top-right">
        <div class="hot-top-right-show" @click="listAddClick">
          <div>{{ list[listStyle] }}</div>
          <van-icon v-if="!listIcon" name="arrow-down" />
          <van-icon v-if="listIcon" name="arrow-up" />
        </div>
        <div v-if="listIcon" class="hot-top-right-if">
          <span
            @click="listShowClick(index)"
            :class="{active:listStyle==index}"
            v-for="(item,index) in list"
            :key="index"
          >{{item}}</span>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in data" :key="index" class="hot-item">
      <img src class="hot-item-img" alt />
      <div class="hot-item-right">
        <span class="hot-item-right-top">一个人在外面久了时常想家,想起家里的聋哑老母亲,为了生活出来拼搏不能照顾</span>
        <div class="hot-item-icon">
          <div class="hot-item-icon-left">
            <div class="hot-item-icon-left-left">
              <van-icon name="fire-o" />96.4
            </div>
            <div class="hot-item-icon-left-right">
              <van-icon name="like" />28.5W
            </div>
          </div>
          <div class="hot-item-icon-right">23小时前</div>
        </div>
        <div class="hot-item-right-bottom">
          <div>打得好</div>
          <div>打的</div>
          <div>女人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      //时间数据
      timeIcon: false,
      timeStyle: 1,
      time: ["24小时", "7天"],
      //排序数据
      list: ["综合排序", "点赞最多"],
      listStyle: 1,
      listIcon: false,
    };
  },
  methods: {
    //日月周榜 的图标点击事件
    timeAddClick() {
      this.timeIcon = !this.timeIcon;
    },

    //日月周榜下拉框 的点击事件高亮事件
    timeShowClick(index) {
      this.timeStyle = index;
      //在点击完后收起下拉框
      this.timeIcon = false;
    },

    listAddClick() {
      this.listIcon = !this.listIcon;
    },
    listShowClick(index) {
      this.listStyle = index;
      //在点击完后收起下拉框
      this.listIcon = false;
    },
  },
};
</script>

<style scoped lang='less'>
.hot {
  display: flex;
  flex-direction: column;
  color: #999;
  &-top {
    display: flex;
    font-size: 0.75rem;
    justify-content: flex-end;
    padding: 0.75rem 0;
    border-bottom: 1px solid #555;
    &-left {
      display: flex;
      flex-direction: column;
      &-show {
        display: flex;
        align-items: center;
      }
      &-if {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 5rem;
        top: 9.6875rem;
        right: 4.75rem;
        border: 1px solid #777;
        border-bottom: 0;
        margin-top: 0.625rem;
        font-size: 0.75rem;
        background-color: #333;
        span {
          border-bottom: 1px solid #777;
          padding: 5px 0;
        }
      }
    }
    &-center {
      margin: 0 5px;
    }
    &-right {
      display: flex;
      flex-direction: column;
      &-show {
        display: flex;
        align-items: center;
      }
      &-if {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 5rem;
        top: 9.6875rem;
        right: 10px;
        border: 1px solid #777;
        border-bottom: 0;
        margin-top: 0.625rem;
        font-size: 0.75rem;
        background-color: #333;
        span {
          border-bottom: 1px solid #777;
          padding: 5px 0;
        }
      }
    }
  }
  &-item {
    display: flex;
    padding: 0.75rem 0;
    border-bottom: 1px solid #555;
    &-img {
      width: 70px;
      height: 100px;
      margin-right: 0.5rem;
    }
    &-right {
      display: flex;
      flex-direction: column;
      &-top {
        color: white;
        text-align: left;
        font-size: 0.875rem;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .hot-item-icon {
        display: flex;
        justify-content: space-between;
        margin: 12px 0 6px;
        &-left {
          display: flex;
          &-left {
            color: orange;
            margin-right: 0.625rem;
          }
        }
        &-right {
          font-size: 0.875rem;
        }
      }
      &-bottom {
        display: flex;
        font-size: 0.75rem;
        div {
          background-color: #555;
          padding: 2px;
          margin-right: 0.3125rem;
        }
      }
    }
  }
}
.active {
  color: orange;
}
</style>