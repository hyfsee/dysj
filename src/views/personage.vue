<template>
  <!-- 个人中心页面 -->
  <div class="personage">
    <div class="personage-top">会员到期时间:{{}}</div>
    <router-link to="/personalParticulars" class="personage-img">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div>账户ID:</div>
    </router-link>
    <div class="personage-bottom">
      <router-link to="/MyRanking" class="personage-bottom-item">
        <div><van-icon name="friends" />我的抖音号</div>
        <van-icon name="arrow" />
      </router-link>
      <router-link to="/RankingHistory" class="personage-bottom-item">
        <div><van-icon name="clock" />播控历史</div>
        <van-icon name="arrow" />
      </router-link>
      <div class="personage-bottom-item">
        <div><van-icon name="star" />我的收藏</div>
        <van-icon name="arrow" />
      </div>
      <router-link to="/originality" class="personage-bottom-item">
        <div><van-icon name="thumb-circle" />创意素材</div>
        <van-icon name="arrow" />
      </router-link>
      <router-link to="/price" class="personage-bottom-item">
        <div><van-icon name="gold-coin" />抖音号估值</div>
        <van-icon name="arrow" />
      </router-link>
      <router-link to="/motif" class="personage-bottom-item">
        <div><van-icon name="todo-list" />主题设置</div>
        <van-icon name="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.personage {
  display: flex;
  flex-direction: column;
  color: white;
  &-top {
    font-size: 12px;
    color: #888;
    background-color: #555;
    width: 100%;
    padding: 0.3125rem 0;
  }
  &-img {
    padding: 0.625rem 0;
    font-size: 12px;
    width: 100%;
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    .personage-bottom-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #555;
      padding: 10px 0;
      div {
        display: flex;
        align-items: center;
      }
      .van-icon {
        margin-right: 0.625rem;
        color: #999;
      }
    }
  }
}
</style>>