<template>
  <div>
    <div class="item">
      <div class="item-left">头像</div>
      <div class="item-right">
        <img
          style="width: 3.125rem; height: 3.125rem; border-radius: 1.5625rem"
          src="../assets/a1.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="item">
      <div class="item-left">昵称</div>
      <div class="item-right">小阿三打算</div>
    </div>
    <div class="item">
      <div class="item-left">飞瓜id</div>
      <div class="item-right">12312</div>
    </div>
    <div class="item">
      <div class="item-left">绑定手机</div>
      <router-link to="/phone" class="item-right">去绑定</router-link>
    </div>
    <div class="item">
      <div class="item-left">设置密码</div>
      <div class="item-right">去设置</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.item {
  display: flex;
  font-size: 0.875rem;
  height: 3.75rem;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #777;
  align-items: center;
}
</style>