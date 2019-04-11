<template>
  <div class="paySuccess">
    <div class="topBanner">
      <div class="leftMsg">
        <p>订单支付成功</p>
        <div class="peiceMsg"><b>¥{{paySuccessData.price}}</b><i v-on:click="showDetail()">明细></i></div>
        <span>订单号：{{paySuccessData.orderNum}}</span>
      </div>
      <img src="./banner.png" alt="">
    </div>
    <div class="positionBox">
    <div class="personalMsg">
      <div class="box">
        <img src="./dingwei-2.png" alt="">
        <div class="rightMsg">
          <p><b>{{paySuccessData.buyName}}</b><b>{{paySuccessData.buyTel}}</b></p>
          <span>地址：{{paySuccessData.buyAdress}}</span>
        </div>
      </div>
    </div>
    </div>
    <div class="businessMsg">
      <div class="title">
        <img src="./shangjia.png" alt="">
        <h3>商家信息</h3>
      </div>
      <ul>
        <li><h4>商家姓名：</h4><span>{{paySuccessData.businessName}}</span></li>
        <li><h4>电话号码：</h4><span>{{paySuccessData.businessTel}}</span></li>
        <li><h4>商家地址：</h4><span>{{paySuccessData.businessAdress}}</span></li>
      </ul>
    </div>
    <div class="visaMsg">
      <div class="title">
        <img src="./qianzhengpeixun.png" alt="">
        <h3>签证信息</h3>
      </div>
      <div class="visaPro">
        <img src="./listImg.png" alt="">
        <div class="proMsg">
          <h3>{{paySuccessData.visaName}}</h3>
          <p><span>数量：{{paySuccessData.visaNum}}</span><span>类型：{{paySuccessData.visaType}}</span></p>
          <h3>￥{{paySuccessData.visaPrice}}</h3>
        </div>
      </div>
      <ul>
        <li><h4>签证名称：</h4><span>{{paySuccessData.visaName}}</span></li>
        <li><h4>使用时间：</h4><span>{{paySuccessData.visaTime}}至{{paySuccessData.visaTime}}</span></li>
        <li><h4>签证套餐：</h4><span>{{paySuccessData.visaType}}</span></li>
        <li><h4>办理时长：</h4><span>{{paySuccessData.timeNum}}个工作日</span></li>
      </ul>
      <div class="title borderTitle">
        <div class="keFu">
          <img src="./kefu.png" alt="">
          <h3>联系客服</h3>
        </div>
      </div>
    </div>
    <footer>
        <div class="box">
        <div class="textMsg">
            <div class="leftFoot">
                <span>删除订单</span>
            </div>
        </div>
        <button type="button" >再次购买</button>
        </div>
        
    </footer>


    <!-- 明细弹层 -->
    <div class="bottomMask" v-if="showMingXi"></div>
    <div class="midMask" v-if="showMingXi">
      <h2>订单详细价格</h2>
      <ol>
        <li>
          <h6>签证名称</h6>
          <p><b>￥780</b><i>X1</i></p>
        </li>
        <li>
          <h6>签证名称</h6>
          <p><b>￥780</b><i>X1</i></p>
        </li>
        <li>
          <h6>签证名称</h6>
          <p><b>￥780</b><i>X1</i></p>
        </li>
      </ol>
      <button type="button" v-on:click="hideMask()">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paySuccess',
  data () {
    return {
      paySuccessData:{
        price:0,
        orderNum:'1-00',
        buyName:'张三',
        buyAdress:'银山路',
        buyTel:'18997876547',
        businessName:'李四',
        businessTel:1909888,
        businessAdress:'金桥路',
        visaName:'英国',
        visaNum:'2',
        visaPrice:'23',
        visaTime:'2019-09-08',
        visaType:'旅游签',
        timeNum:'3-10'

      },
      showMingXi:false,
      
    }
    
  },
  methods:{
      showDetail(){
        this.showMingXi=true
      },
      hideMask(){
        this.showMingXi=false
      },
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
@import "../../common/sass/footer.scss";
.positionBox{
  position: relative;
  height: 1.3rem;
}
.businessMsg,.visaMsg{
  @include bg_color($background-color-theme0);
  width: 100%;
  margin-bottom: 0.2rem;
}
h3{
  @include font-dpr($font_little_mid2);
  @include font_color($font-color-theme2);
  font-weight: bold;
}
h4{
  @include font-dpr($font_little_mid3);
  @include font_color($font-color-theme2);
  font-weight: bold;
}
.topBanner{
  width: 100%;
  height: 2.6rem;
  @include btn_yellow();
  position: relative;
  .leftMsg{
    padding-left: 0.24rem;
    padding-top: 0.56rem;
    p{
      @include font-dpr($font_little_mid);
      @include font_color($font-color-theme5);
      padding-bottom: 0.18rem;
    }
    .peiceMsg{
      display: flex;
      padding-bottom: 0.18rem;
      b{
        @include font-dpr($font_little_big);
        @include font_color($font-color-theme5);
        font-weight: bold;
      }
      i{
        @include font-dpr($font_little_small1);
        @include font_color($font-color-theme5);
        padding-top: 0.1rem;
        padding-left: 0.08rem;
      }
    }
    span{
        @include font-dpr($font_little_small);
        @include font_color($font-color-theme5);
      }
    
  }
  img{
    width: 2.1rem;
    height: 1.57rem;
    position: absolute;
    top:0.28rem;
    right:0.22rem;
  }
}
.personalMsg{
  width: 92%;
  @include bg_color($background-color-theme0);
  border-radius: 0.14rem;
  padding: 0.36rem 0;
  left: 0;
  right: 0;
  top: -0.4rem;
  position: absolute;
  margin: auto;
  .box{
    display: flex;
  }
  .rightMsg{
    padding-left: 0.26rem;
  }
  img{
    width: 0.22rem;
    height: 0.28rem;
  }
  p{
    padding-bottom: 0.18rem;
    display: flex;
    b{
      @include font-dpr($font_little_mid2);
      @include font_color($font-color-theme2);
      margin-right: 0.2rem;
    }
  }
  span{
      @include font-dpr($font_little_small);
      @include font_color($font-color-theme3);
      line-height: 0.28rem;
    }
  
}
.title{
  padding: 0.3rem 0;
  border-bottom: 0.01rem solid $border-Color1;
  display: flex;
  img{
    width: 0.28rem;
    height: 0.26rem;
    margin-left: 0.3rem;
    margin-right: 0.16rem;
  }
}
ul{
  width: 92%;
  margin: 0 auto;
  padding:0.36rem 0;
  li{
    display: flex;
    margin-bottom: 0.4rem;
    h4{
      width: 20%;
    }
    span{
      flex-grow: 1;
      @include font-dpr($font_little_mid3);
      @include font_color($font-color-theme3);
      
    }
  }
  li:last-child{
    margin: 0;
  }
}
.borderTitle{
  border: none;
  border-top: 0.01rem solid $border-Color1;
}
.keFu{
  margin: 0 auto;
  display: flex;
  img{
    margin-top: 0.06rem;
  }
}
.visaMsg{
  padding-bottom: 1.3rem;
}
.visaPro{
  width: 90%;
  margin: 0 auto;
  border-bottom: 0.01rem solid $border-Color1;
  padding: 0.36rem 0;
  display: flex;
  img{
    width: 1.9rem;
    height: 1.38rem;
    margin-right: 0.3rem;
  }
  .proMsg{
    flex-grow: 1;
    p{
      display: flex;
      padding: 0.24rem 0;
      span{
        @include font-dpr($font_little_mid3);
        @include font_color($font-color-theme3);
        margin-right: 0.2rem;
      }
    }
  }
}
footer{
  z-index: 2;
}
footer span{
  @include font-dpr($font_little_mid3);
  @include font_color($font-color-theme3);
  line-height: 0.8rem;
}

// 明细弹层
.midMask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 84%;
    background: white;
    z-index: 3;
    height: 6.4rem;
    border-radius: 0.14rem;
    h2{
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        padding: 0.4rem 0;
    }
    ol{
      width: 90%;
      margin: 0 auto;
      padding-top: 0.4rem;
      li{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.4rem;
        h6{
            @include font-dpr($font_little_mid3);
            @include font_color($font-color-theme9);
        }
        p{
          display: flex;
          b{
            @include font-dpr($font_little_mid4);
            @include font_color($font-color-theme1);
            margin-right: 0.1rem;
          }
          i{
            @include font-dpr($font_little_mid4);
            @include font_color($font-color-theme9);
          }
        }
      }
    }
    button{
        width: 90%;
        line-height: 0.8rem;
        text-align: center;
        @include btn_yellow();
        border-radius:0.14rem;
        @include font_color($font-color-theme5);
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        right: 0;
        margin: auto;
    }
}
</style>
