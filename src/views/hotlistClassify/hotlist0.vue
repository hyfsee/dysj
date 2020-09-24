<template>
  <div>
    <div class="hotlist">
      <div v-for="(item,index) in data" :key="item.id" class="hotlist-item">
        <div :class="{'active-font':index < 3}" class="hotlist-item-left">
          {{ index+1 }}
        </div>
        <div class="hotlist-item-center">
          <img class="hotlist-item-center-img" src alt />
          <div class="hotlist-item-center-text">{{ item.name }}</div>
        </div>
        <div class="hotlist-item-right">
          <van-icon name="fire-o" />
          <span>1640.1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  mounted() {
    
  },
};
</script>

<style lang='less' scoped>
.hotlist {
  display: flex;
  flex-direction: column;
  &-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: white;
    font-size: 14px;
    border-bottom: 1px solid #555;
    &-left {
      width: 2.5rem;
    }
    &-center {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-img {
        width: 30px;
        height: 30px;
        background-color: #fff;
        margin-right: 0.625rem;
      }
    }
    &-right {
      color: orange;
      font-size: 1rem;
      span {
        margin-left: 0.25rem;
      }
    }
  }
}
.active-font {
  color: orange;
  font-size: 16px;
  font-weight: 700;
}
</style>