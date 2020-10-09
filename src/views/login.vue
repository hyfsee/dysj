<template>
  <form method="post" class="login">
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
    <div class="login-bottom" @click="ifClick">登陆</div>
  </form>
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
    ifClick() {
      if (this.phoneNum) {
        this.$router.push({
          path: "/",
        });
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
    background-color: #fff;
    width: 100px;
    margin: 0.625rem 0 0 9.375rem;
    color: black;
    padding: 5px 0;
  }
}
.btn {
  background-color: #555;
  color: #777;
}
</style>