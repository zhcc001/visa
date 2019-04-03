<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from './common/js/rem.js';
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import "./common/sass/mixin.scss";
@import "./common/sass/variable.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  @include bg_color($background-color-theme6);
}
.articleBox .swiper-container {
      width: 100%;
      height: 100%;
    }
.articleBox .swiper-slide{
  margin: 0 !important;
  width: 52% !important;
  text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
}
.swiper-pagination-bullet-active{
  background:rgba(255,183,1,1) !important;
}
.swiper-pagination-bullet{
  width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #E6E6E6;
    opacity: 1;
       margin: 0 4px ;
    /* height: 0.2rem; */
    /* overflow: hidden; */
}
</style>
