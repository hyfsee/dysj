<template>
  <div class="search">
    <div class="search-icon">
      <van-icon name="search" />
      <input type="text" class="search-ipt" :placeholder="data" />
    </div>
    <button class="search-btn">搜索</button>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang='less' scoped>
.search {
  height: 3.125rem;
  display: flex;
  font-size: 0.875rem;
  padding: 0.625rem 0;
  &-icon {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      padding: 0 0.5rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 1rem 0 0 1rem;
      height: 100%;
    }
    input {
      flex: 1;
      border: 0;
      height: 100%;
      font-size: 0.75rem;
    }
  }
  &-btn {
    width: 3.125rem;
    background-color: orange;
    color: white;
    line-height: 1.25rem;
    border-radius: 0 1rem 1rem 0;
  }
}
</style>