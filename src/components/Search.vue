<template>
  <div>
    <div class="search" @click="searchClick">
      <van-icon name="search" />{{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  methods: {
    searchClick() {
      this.$router.push({
        path: "/search",
      });
    },
  },
};
</script>

<style lang='less' scoped>
.search {
  width: 100%;
  padding: 0.3125rem 0 0.3125rem 0.75rem;
  font-size: 12px;
  background-color: #fff;
  color: #777;
  margin: 0.625rem 0;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  .van-icon {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>