<template>
  <div class="phone">
    <input type="text" placeholder="请输入绑定手机号" />
    <div class="center">
      <input type="text" placeholder="请输入验证码" />
      <div>发送验证码</div>
    </div>
    <!-- 如果没有设置密码就转跳到设置密码页面 -->
    <router-link to="/password" class="bottom">下一步</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.phone {
  padding: 50px 30px 0;
  input {
    width: 100%;
    height: 40px;
    padding-left: 20px;
    border: 0;
    border-radius: 20px;
    color: black;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .center {
    position: relative;
    div {
      position: absolute;
      background-color: green;
      color: black;
      height: 1.875rem;
      width: 6.25rem;
      line-height: 1.875rem;
      border-radius: 0.9375rem;
      top: 0.3125rem;
      right: 0.3125rem;
      font-size: 14px;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    background-color: #777;
    height: 40px;
    border-radius: 20px;
    line-height: 40px;
  }
}
</style>