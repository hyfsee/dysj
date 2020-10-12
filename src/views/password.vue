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