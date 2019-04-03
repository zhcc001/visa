<template>
<!-- 签证首页 -->
  <div class="home">
    <!-- 顶部定位、省市区、搜索 -->
    <div class="top">
    <div class="topBox">
      <div class="address">
        <span class="city">上海</span>
        <img class="downIcon" src="./sanjiao1.png" alt="">
      </div>
      <div class="search">
        <div class="souSuoBox">
        <img class="souSuo" src="./sousuo.png" alt="">
        </div>
        <input class="keyWord" type="text" placeholder="输入签证国家或地区" v-on:focus="enterSearch()">
      </div>
    </div>
    </div>
    <!-- 轮播 -->
    <div class="swipeBox">
       <swiper :options="swiperBannerOption" ref="myBannerSwiper" >
    <!-- slides -->
    <swiper-slide><img src="./首页.png" alt=""></swiper-slide>
    <swiper-slide><img src="./首页.png" alt=""></swiper-slide>
    <swiper-slide><img src="./首页.png" alt=""></swiper-slide>
    <!-- Optional controls -->
  </swiper>
    <div class="swiper-pagination"  slot="pagination"></div>
  
    </div>
    <!-- 热门目的地 -->
    <div class="hotDestination">
      <h2>热门目的地</h2>
      <div class="hotCountry">
        <ul>
          <li>
            <img class="countryImg" src="./France.png" alt="">
            <div class="countryBox">
              <span class="line"></span>
              <p class="countryName">法国</p>
              <b class="countryPrice">¥120起</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精选文章 -->
    <div class="selectArticle">
      <h2>精选文章</h2>
      <div class="articleBox">
        <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
            <swiper-slide><img src="./bgColor1.png" alt=""></swiper-slide>
            <swiper-slide><img src="./bgColor1.png" alt=""></swiper-slide>
            <swiper-slide><img src="./bgColor1.png" alt=""></swiper-slide>
    <!-- Optional controls -->
      </swiper>
        
      </div>
    </div>
    <!-- 办理流程 -->
    <div class="processingFlow">
      <h2>办理流程</h2>
      <div class="processImg">
        <ul>
          <li><div><img class="processIcon"  src="./icon1.png" alt=""><span>客户提交订单</span></div></li>
          <li class="sanjiaoLi"><img class="sanjiaoIcon" src="./sanjiao .png" alt=""></li>
          <li><div><img class="processIcon" src="./icon2.png" alt=""><span>提交签证资料</span></div></li>
          <li class="sanjiaoLi"><img class="sanjiaoIcon" src="./sanjiao .png" alt=""></li>
          <li><div><img class="processIcon" src="./icon3.png" alt=""><span>在线审核资料</span></div></li>
          <li class="sanjiaoLi"><img class="sanjiaoIcon" src="./sanjiao .png" alt=""></li>
          <li><div><img class="processIcon" src="./icon4.png" alt=""><span>送签／面试</span></div></li>
          <li class="sanjiaoLi"><img class="sanjiaoIcon" src="./sanjiao .png" alt=""></li>
          <li><div><img class="processIcon" src="./icon5.png" alt=""><span>签证出签成功</span></div></li>
        </ul>
      </div>
    </div>
    <!-- 签证列表 -->
    <div class="visaListBox">
      <div class="tableTitle">
        <ol>
          <li :class="{active:index==tableTitleFlag}" v-for="(item,index) in countryTableList" :key='index' v-on:click="countryClick(item,index)"><span>{{item.Name}}</span><i :class="{lineI:true,lineActive:index==tableTitleFlag}"></i></li>
        </ol>
      </div>
      <div class="visaList">
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
      <router-link to='/visaList'>
          查看更多
      </router-link>
      </div>
    </div>

  </div>
</template>
<script>
// import vconsole from '../../utils/vconsole.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {AdvertisingPosition} from './api.js'
export default {
  name: 'Home',
  data () {
    return {
      swiperOption: {
           slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.articleBox .swiper-pagination',
        clickable: true,
      },
      
        },
        swiperBannerOption:{
          pagination: {
          el: '.swipeBox .swiper-pagination',
          },
          loop : true,
          autoplay:true,
      },
      tableTitleFlag:0,
      countryTableList:[
        {
          id:1,
          Name:'全部'
        },{
          id:2,
          Name:'亚洲'
        },{
          id:3,
          Name:'美洲'
        },{
          id:4,
          Name:'大洋洲'
        },{
          id:5,
          Name:'欧洲'
        },{
          id:6,
          Name:'非洲'
        }
      ],
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      bannerSwiper(){
        return this.$refs.myBannerSwiper.swiper
      },

  },
  created(){
    AdvertisingPosition()
  },
  mounted(){
    // this.swiper.slideTo(3, 1000, true)
  },
  methods:{
    countryClick(item,index){
      this.tableTitleFlag=index
    },
    // 进入搜索页
    enterSearch(){
      this.$router.push('/Search')
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'  scoped>
@import '../../common/sass/commonStyle.scss';
@import '../../common/sass/list.scss';
.home{
  @include bg_color($background-color-theme0);

}
.swipeBox,.hotDestination,.selectArticle,.processingFlow{
  width: 94%;
  margin: 0 auto;
  
}
.swipeBox{
  height: 4rem;
  position: relative;
  padding-top: 0.3rem;
  
}
.swipeBox img{
  width: 100%;
  height: 3rem;
}
h2{
  
  @include font-dpr($font_little_big);
  color: #2C2C2C;
  margin-bottom: 0.3rem;
  font-weight: 600;
}
.hotCountry{
  width: 100%;
  margin-bottom: 0.6rem;
  // @include bg_color($background-color-theme);
  
}
.hotCountry ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hotCountry ul li{
  width: 2.2rem;
  height: 2.56rem;
  position: relative;
  margin-bottom: 0.22rem;
}
.countryImg{
  width: 100%;
}
.countryBox{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin:  auto;
  z-index: 3;
}
.line{
  display: block;
    width: 0.34rem;
    height: 0.06rem;
    border-radius: 4px;
    @include bg_color($background-color-theme0);
    margin: 0 auto;
}
.countryName,.countryPrice{
  text-align: center;
  @include font_color($font-color-theme5);
}
.countryName{
  @include font-dpr($font_little_mid2);
  padding: 0.12rem 0;
}
.countryPrice{
  @include font-dpr($font_little_small1);
  margin-bottom: 0.24rem;
}
.articleBox{
  margin-left: -2rem;
  margin-top: -0.2rem;
  margin-bottom: 0.7rem;
}
.articleBox img{
  width: 100%;

}
.processImg{
  width: 100%;
  margin-bottom: 0.7rem;
}
.processImg ul{
  display: flex;
  justify-content: space-between;
}
.processImg ul li{
  width: 40%;
}
.processIcon{
  margin: 0 auto;
  width: 0.52rem;
  height: 0.52rem;
}
.sanjiaoLi{
  width: 10% !important;
}
.sanjiaoIcon{
  width: 0.14rem;
  height: 0.22rem;
  margin: 0  auto;
  margin-top: 0.6rem;
}
.processImg span{
  @include font-dpr($font_little_small);
  color: #8D8D8D;
  text-align: center;
  padding-top: 0.26rem;
  line-height: 0.3rem;
}
.tableTitle{
  width: 100%;
  box-shadow:0px 1px 20px 0px rgba(188,188,188,0.27);
  
}
.lineI{
  width: 0.3rem;
  height: 0.06rem;
  @include bg_color($background-color-theme);
  margin: 0 auto;
  margin-top: 0.1rem;
  opacity: 0;

  
}
.lineI.lineActive{
  opacity: 1;
}
.tableTitle ol{
  width: 94%;
  margin: 0 auto;
  display: flex;
  padding: 0.2rem 0;
  justify-content: space-between;
}
.tableTitle ol li{
  @include font-dpr($font_little_mid3);
  color: #5B5B5B;
}
.tableTitle ol li.active{
  font-size: 0.34rem;
  color: #373737;
}
.swiper-pagination{
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
}
.visaList{
  padding-bottom: 0.6rem;
}
a{
  width: 80%;
  margin: 0 auto;
  line-height: 0.85rem;
  border:0.02rem solid $border-Color;
  @include font_color($font-color-theme4);
  @include font-dpr($font_little_mid2);
  text-align: center;
  border-radius:43px;
}
</style>
