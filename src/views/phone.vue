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
  padding: 3.125rem 1.875rem 0;
  input {
    width: 100%;
    height: 2.5rem;
    padding-left: 1.25rem;
    border: 0;
    border-radius: 1.25rem;
    color: black;
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
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
      font-size: 0.875rem;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    background-color: #777;
    height: 2.5rem;
    border-radius: 1.25rem;
    line-height: 2.5rem;
  }
}
</style>