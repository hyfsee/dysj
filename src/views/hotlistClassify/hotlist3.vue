<template>
  <div class="hotlist">
    <div v-for="(item,index) in data" :key="index" class="hotlist-item">
      <div :class="{'active-font': index<3}" class="hotlist-item-left">{{ index + 1 }}</div>
      <div class="hotlist-item-center">
        <img class="hotlist-item-center-img" src alt />
        <div class="hotlist-item-center-text">
          <div class="hotlist-item-center-text-top">#后浪家长上场跤量 快看!与小神兽交量吧我的天啊我的天啊我的天啊我的天啊我的天啊我的天啊</div>
          <div
            class="hotlist-item-center-text-bottom"
          >关键商品:与爸爸天然亲肤洗衣凝珠家用促销装 深层洁净亲肤无一例外无一例外无一例外无一例外无一例外</div>
        </div>
      </div>
      <div class="hotlist-item-right">19.4W</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped lang='less'>
.hotlist {
  display: flex;
  color: white;
  flex-direction: column;
  font-size: 0.875rem;
  &-item {
    display: flex;
    padding: 0.625rem 0;
    border-bottom: 1px solid #555;
    align-items: center;
    &-left {
      width: 2.5rem;
    }
    &-center {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 40px 0 0;
      &-img {
        width: 60px;
        height: 70px;
        margin-right: 0.625rem;
      }
      &-text {
        &-top {
          font-size: 14px;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        &-bottom {
          font-size: 12px;
          color: #777;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
    &-right {
      color: orange;
    }
  }
}
.active-font {
  color: orange;
  font-size: 16px;
  font-weight: 700;
}
</style>