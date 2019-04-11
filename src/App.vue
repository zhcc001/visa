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
  width: 4rem !important;
  padding: 0.2rem 0;
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

.swiperBox .swiper-slide:not(.swiper-slide-active){
      transform: scale(0.9);
  }
  
  .swiperBox .swiper-slide-active .imgBg{
    width: 0.94rem !important;
    height: 0.94rem !important;
    @include imgbg2();
  }
  
.swiperBox .swiper-slide-active p{
    @include font_color($font-color-theme !important);
    text-align: center;
  }
  .citySelect .cube-index-list{
    height: 72vh;
  }
  .citySelect .custom-item{
    position: relative;
    height: 1.1rem !important;
    line-height:1.1rem !important;
    padding: 0 0.22rem !important;
    @include font_color($font-color-theme4);
    @include font-dpr($font_little_mid1);
}
.citySelect .cube-index-list-anchor{
  @include font-dpr($font_little_small !important);
  @include font_color($font-color-theme4 !important);
}
.citySelect .cube-index-list-nav > ul > li{
  margin-bottom: 0.2rem !important;
  padding: 0 !important;
}
.citySelect .cube-index-list-nav > ul > li.active{
  padding: 0 !important;
  width: 0.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
  text-align: center;
  @include btn_yellow() ;
  @include font-dpr($font_little_small1 !important);
  @include font_color($font-color-theme5 !important);
  border-radius: 50% !important;
}
.citySelect .cube-index-list-nav{
  right: 0.28rem !important;
  top: 20% !important;
}
.citySelect .cube-index-list-content{
  background: #fafafa !important;
}


#search .cube-index-list{
    height: 52vh;
  }
  #search .custom-item{
    position: relative;
    height: 0.9rem !important;
    line-height:0.9rem !important;
    padding: 0 !important;
    @include font_color($font-color-theme4);
    @include font-dpr($font_little_mid1);
}
#search .cube-index-list-anchor{
  @include font-dpr($font_little_small !important);
  @include font_color($font-color-theme4 !important);
  background: none !important;
  padding-left: 0;
}
#search .cube-index-list-nav > ul > li{
  margin-bottom: 0.2rem !important;
  padding: 0 !important;
}
#search .cube-index-list-nav > ul > li.active{
  padding: 0 !important;
  width: 0.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
  text-align: center;
  @include btn_yellow() ;
  @include font-dpr($font_little_small1 !important);
  @include font_color($font-color-theme5 !important);
  border-radius: 50% !important;
}
#search .cube-index-list-nav{
  right: 0.2rem !important;
  top: 10% !important;
}

</style>
