<template>
  <div class="hotlist">
    <div v-for="(item,index) in data" :key="index" class="hotlist-item">
      <div :class="{'active-font': index<3}" class="hotlist-item-left">{{ index + 1 }}</div>
      <div class="hotlist-item-center">
        <img class="hotlist-item-center-img" src alt />
        <div class="hotlist-item-center-text">李子柒柳州螺蛳粉关系特产螺蛳粉素食米线螺蛳粉</div>
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

<style lang='less' scoped>
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
      padding: 0 80px 0 0;
      &-img {
        width: 50px;
        height: 50px;
        margin-right: 0.625rem;
      }
      &-text {
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
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