<template>
  <div class="register">
    <div class="top">注册</div>
    <div class="phone">
      <input type="text" placeholder="请输入你的手机号码" />
      <div @click="myClick" class="phone-style">获取验证码</div>
    </div>
    <input type="password" placeholder="请输入你的密码" />
    <input type="password" placeholder="请再次输入你的密码" />
    <router-link to="/" class="btn">立即注册</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    myClick() {
      console.log(2);
    },
  },
};
</script>

<style scoped lang='less'>
.register {
  padding: 1.25rem;
  .phone {
    position: relative;
    &-style {
      position: absolute;
      top: 1.625rem;
      font-size: 0.875rem;
      right: 0.5rem;
      background-color: green;
      padding: 0.3125rem 1.25rem;
      border-radius: 1.25rem;
      color: black;
    }
  }
  input {
    margin-top: 1.25rem;
    padding-left: 1.25rem;
    width: 100%;
    height: 2.5rem;
    border-radius: 2.5rem;
    color: black;
  }
  .btn {
    display: flex;
    justify-content: center;
    height: 3.125rem;
    background-color: green;
    line-height: 3.125rem;
    margin: 1.875rem auto 0;
  }
}
</style>