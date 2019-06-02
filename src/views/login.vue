<template>
  <div class="login">
    <form class="login-wrap">
      <img class="avatar" src="../assets/logo.png">
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input id="email" type="email" class="form-control" placeholder="邮箱" autofocus>
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input id="password" type="password" class="form-control" placeholder="密码">
      </div>
      <a
      @click="login"
      class="btn btn-primary btn-block" 
      javascript=":;">登 录</a>
    </form>
  </div>
</template>

<script>
export default {
    methods:{
        login(){
            console.log(123);
        }
    }
}

</script>
<style>

</style>


