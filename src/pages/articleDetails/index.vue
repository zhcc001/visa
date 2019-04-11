<template>
  <div class="articleDetails">
      <div class="bannerBox">
        <img src="./banner.png" alt="">
        <div class="biaoQian">
          <span>标签</span>
          <span>标签</span>
          <span>标签</span>
        </div>
      </div>
      <div class="articContent">
        <div class="itemArtic">
          <h1 class="box">文章的标题，文章标题</h1>
          <i>”</i>
          <img class="box" src="./smallTitle.png" alt="">
          <p class="box">东京是一座复古和现代并存的城市，这种矛盾为它平添了诸多浪漫:高耸的写字楼，行色匆匆的_上班族，会在夜晚钻进居酒屋，用一杯清酒慰藉白日的辛劳;木质栅栏的街道，身穿和服的少女，也会挽着闺蜜的手，去买当季最新的背包。在不缺浪漫的东京，可以在东京塔上看夜色苍苍，也可以在满树樱花里迷失自己。</p>
          <h4 class="box"></h4>
          <ol class="box">
            <li>
              <img src="" alt="">
              <p></p>
            </li>
          </ol>
        </div>
      </div>
       <footer>
            <div class="box">
                <div class="keFu">
                    <img src="./shouyedianliang.png" alt=""/>
                    <p>回到首页</p>
                </div>
                <div class="like">
                    <img src="./zan-2.png" alt="">
                    <p>点赞</p>
                </div>
                <button type="button">收藏</button>
            </div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'articleDetails',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
.bannerBox{
  position: relative;
  img{
    width: 100%;
  }
  .biaoQian{
    position: absolute;
    left: 0.28rem;
    bottom: 0.36rem;
    display: flex;
    span{
      padding: 0 0.32rem;
      line-height: 0.56rem;
      border:0.02rem solid white;
      color: white;
      font-size: 0.24rem;
      margin-right: 0.12rem;
      border-radius: 0.3rem;
    }
  }
}
.articContent{
  padding-top: 0.5rem;
  padding-bottom: 1.62rem;
  h1{
    font-size: 0.5rem;
    color: #b7b7b7;
  }
  i{
    float: right;
    font-size: 1.97rem;
    color: #f1f1f1;
  }
  p{
    @include font-dpr($font_little_mid3);
    @include font_color($font-color-theme4);
    line-height: 0.3rem;
    padding-top: 0.34rem;
  }
}

footer{
    position: fixed;
    width: 100%;
    bottom:0;
    left:0;
    padding:0.2rem 0;
    @include bg_color($background-color-theme0);
    border-top:0.01rem solid $border-Color1;
    z-index:300;
    .box{
        display: flex;

    }
    .keFu{
        margin-right: 0.58rem;
        img{
            width: 0.44rem;
            height: 0.38rem;
            margin:0 auto;
            margin-bottom: 0.14rem;
        }
        
    }
    p{
            @include font-dpr($font_little_small1);
            @include font_color($font-color-theme2);
            text-align: center;
        }
        .like{
            margin-right: 0.4rem;
            img{
                width: 0.40rem;
                height: 0.42rem;
                margin:0 auto;
                margin-bottom: 0.12rem;
                
            }
        }
        button{
            flex-grow: 1;
            box-shadow:-1px 4px 20px 0px rgba(255,163,2,0.39);
            @include font_color($font-color-theme5);
            @include font-dpr($font_little_mid2);
            line-height: 0.8rem;
            text-align: center;
            border-radius:0.4rem;
            @include btn_yellow()
        }
}
</style>
