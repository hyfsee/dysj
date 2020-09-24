<template>
  <div class="hotlist">
    <div v-for="(item,index) in data" :key="index" class="hotlist-item">
      <div :class="{'active-font':index<3}" class="hotlist-item-left">{{ index+1 }}</div>
      <div class="hotlist-item-center">
        <img class="hotlist-item-center-img" src alt />
        <div class="hotlist-item-center-text">天津一家人正在直播</div>
      </div>
      <div class="hotlist-item-right">518881</div>
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
      &-img {
        width: 30px;
        height: 30px;
        margin-right: 0.625rem;
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