<template>
  <div>
    <div class="item">
      <div class="item-left">头像</div>
      <div class="item-right">img</div>
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
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #777;
}
</style>