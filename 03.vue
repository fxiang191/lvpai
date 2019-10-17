<template>
  <div class="c1">
    <div id="d2">
      <input type="text" placeholder="请输入用户名/手机号" id="d1">
      <input type="password" placeholder="请输入密码">
      <span>忘记密码</span>
      <input type="button" value="登录" id="d3">
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.c1{
  position: fixed;
  background:url("../../public/images/timg5.jpg") no-repeat -500px;
  top: 0;bottom: 0;left: 0;right: 0;

}
#d2{
  position: absolute;
  width: 600px;
  height: 300px;
  background: #fff;
  border: #ccc solid 1px;
  top: 50%;left: 50%;
  margin-top:-150px;
  margin-left: -300px;
  opacity: 0.8; 
}
#d1{
  margin-top:30px;
}
input{
  display: block;
  /* padding: 3px; */
  text-align: center;
  width: 320px;
  height: 42px;
  margin-bottom: 15px;
  margin-left:20px;
}
span{
  display: block;
  margin-bottom: 10px;
  margin-left:260px;
}
#d3{
  /* padding-right:20px; */
  background: #ffa800;
}
</style>