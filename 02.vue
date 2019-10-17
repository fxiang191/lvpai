<template>
<div>
  <el-row :gutter="20" id="d1">
    <el-col :span="2" :offset="5"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="24" id="d">
    <img src="../../public/images/timg.jpg" alt="" style="width:100%;height:400px;">
    <div><a href="http://localhost:8080/#/one">炸了</a></div>
  </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple"></div>
      <hr style="margin-top:15px">
    </el-col>
  </el-row>
  <!-- 详情 -->
  <el-row :gutter="20">
    <el-col :span="10" :offset="5">
      <div class="grid-content bg-purple">
        <el-row>
          <el-col :span="24">
            <p>
              【我们为什么写游记？】

              除了爱情，旅行大概也是人生最美好的事物之一。它不止带来惊喜、愉悦，也会制造遗憾，生出怅惘。
              不管留下遗憾还是制造惊喜，收获了艳遇还是一路倒霉，无论你用怎样的方式旅行——在路上终究比宅在家里要精彩。

              不用夸大内心对陌生世界的惧怕，旅行本质就是对“未知”的探索，这探索中充满了不安，但也洋溢着我们对美好事物的向往、爱，和乐趣。

              你不必是一个作家，华丽的辞藻终究敌不过真情的流露。
              人生不用到了盖棺定论才去撰写回忆录，点滴的记忆其实也是珍贵的财富。

              把旅行中最有价值的记忆通过游记呈现和流布，这颗光亮的种子定能照进某些人的心中。




              【我们认为的好游记的标准】




              作文无它术，唯勤读书多为之自工。
              我们也不认为“文章之工”是好游记的唯一标准，具有开创性的文本表达，是我们孜孜不倦的追求。

              如果一定要给好游记界定个标准，我们认为它应该具备以下特质【其中之一】：
            </p>
          </el-col>
        </el-row>
                <el-row>
          <el-col :span="24">
            <img src="../../public/images/timg.jpg" alt="" style="width:100%;display:block">
          </el-col>
        </el-row>

      </div>
    </el-col>
    <!-- 右侧卡片 -->
    <el-col :span="4">
      <!-- <div class="grid-content bg-purple"> -->
        <div>
          nihao 
        </div>
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../public/images/timg.jpg" class="image" style="width:100%;display:block">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">laia</time>
                  <el-button type="text" class="button" style="margin-left:20px">操作按钮</el-button>
                </div>
              </div>
            </el-card>
        </el-col>
      </el-row>
      <!-- </div> -->
      <div>
          nihao 
      </div>
      <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../public/images/timg.jpg" class="image" style="width:100%;display:block">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">laia</time>
                  <el-button type="text" class="button" style="margin-left:20px">操作按钮</el-button>
                </div>
              </div>
            </el-card>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</div>
</template>
<style>
  #d{
    position: relative;
  }
  #d img{
    position: relative;top: 0;left: 0;
  }
  #d div{
    position: absolute;
    top: 80%;left: 50%;
  }
  #d1{
    margin-top:20px;
  }
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>