<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item,i) of msg" :key="i">
      <!-- <h3>{{ item }}</h3> -->
      <img :src=item>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return{
      msg:[require("../../public/images/timg.jpg"),require("../../public/images/timg (1).jpg"),require("../../public/images/timg (2).jpg"),require("../../public/images/timg (3).jpg")]
    }
  }
}
</script>
<style>
.el-carousel{
  margin-top:200px;
}
.el-carousel__item img{
  width: 1000px;
  height: 100%;
}
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>