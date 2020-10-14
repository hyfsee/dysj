<template>
  <div class="login">
    <div class="top">登陆</div>
    <input type="text" placeholder="请输入绑定手机号" />
    <div class="center">
      <input type="text" placeholder="请输入验证码" />
      <div>发送验证码</div>
    </div>
    <div class="login-bottom">
      <router-link to="/" class="login-bottom-login">登陆</router-link>
      <router-link to="/register" class="login-bottom-register"
        >去注册
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang='less'>
.login {
  padding: 1.25rem;
  input {
    margin-top: 1.25rem;
    padding-left: 1.25rem;
    width: 100%;
    height: 2.5rem;
    border-radius: 2.5rem;
    color: black;
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
      top: 1.5625rem;
      right: 0.3125rem;
      font-size: 0.875rem;
    }
  }
  &-bottom {
    display: flex;
    margin-top: 1.25rem;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 0.3125rem 0;
    &-login {
      background-color: #fff;
      padding: 0.625rem 1.875rem;
      width: 6.25rem;
    }
    &-register {
      margin-left: 0.625rem;
      border-bottom: 0.0625rem solid black;
    }
  }
}
.btn {
  background-color: #555;
  color: #777;
}
</style>