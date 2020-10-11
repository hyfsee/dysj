<template>
  <div class="phone">
    <input type="text" placeholder="请输入您的密码" />
    <input type="text" placeholder="请再次确定" />
    <!-- 如果没有设置密码就转跳到设置密码页面 -->
    <router-link to="/personalParticulars" class="bottom">设置完成</router-link>
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