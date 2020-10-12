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
  }
  .center {
    position: relative;
    div {
      position: absolute;
      background-color: green;
      color: black;
      height: 30px;
      width: 100px;
      line-height: 30px;
      border-radius: 15px;
      top: 5px;
      right: 40px;
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