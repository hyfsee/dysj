<template>
  <div class="login">
    <div class="top">登陆</div>
    <div class="login-item">
      <label>手机号码：</label>
      <input
        :class="{ btn: disabled }"
        :disabled="disabled"
        v-model="phone"
        type="text"
        name=""
        id=""
        value=""
      />
    </div>
    <div class="login-center">
      <div>验证码：</div>
      <input v-model="phoneNum" class="login-center-input" type="text" />
      <input
        type="button"
        :disabled="disabled"
        :class="{ btn: disabled }"
        class="login-center-btn"
        @click="showClick"
        value="发送验证码"
      />
    </div>
    <div class="login-bottom">
      <router-link to="/" class="login-bottom-login">登陆</router-link>
      <router-link to="/register" class="login-bottom-register"
        >去注册</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      disabled: false,
      phoneNum: "",
    };
  },
  methods: {
    showClick() {
      if (this.username) {
        this.disabled = true;
      }
    },
  },
};
</script>

<style scoped lang='less'>
.login {
  display: flex;
  flex-direction: column;
  &-item {
    display: flex;
    align-items: center;
    margin: 7.25rem 0 0 3.125rem;
    color: white;
    input {
      background-color: #333;
      width: 150px;
      border: 0;
      border-bottom: 1px solid white;
    }
  }
  &-center {
    display: flex;
    align-items: center;
    margin: 0.625rem 0 0 3.125rem;
    height: 30px;
    color: white;
    &-btn {
      margin-left: 0.625rem;
      padding: 0 0.3125rem;
      color: black;
      font-size: 0.75rem;
      height: 100%;
    }
    &-input {
      border: 0;
      background-color: #333;
      border-bottom: 1px solid white;
      width: 100px;
    }
  }
  &-bottom {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 5px 0;
    &-login {
      background-color: #fff;
      padding: 10px 30px;
      width: 100px;
    }
    &-register {
      margin-left: 10px;
      border-bottom: 1px solid black;
    }
  }
}
.btn {
  background-color: #555;
  color: #777;
}
</style>