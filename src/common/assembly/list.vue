<template>
  <div class="list">
    <ul>
        <li>
          <img class="leftImg" src="./listImg.png" alt="">
          <div class="rightBox">
            <h5>全国受理-新加坡旅游签证</h5>
            <div class="textBox">
              <span class="jianNum">已售23件  |  5.0分</span>
              <b class="price">¥80/人</b>
            </div>
            <div class="timeBox">
              <img class="shiJianIcon" src="./shijian.png" alt="">
              <span >预计办理日期7-12个工作日</span>
            </div>
            <div class="biaoQian">
              <span>出签率高</span>
              <span>可加急</span>
              <span>拒收退款</span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/list.scss';

</style>
