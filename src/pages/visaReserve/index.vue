<template>
  <div id="visaReserve" class="visaReserve">
      <!-- 顶部模块 -->
    <div class="topModel">
        <img src="./listImg.png" alt="">
        <div class="rightText">
            <h3>【上海送签】这里写签证的名签...</h3>
            <p>这里写关于签证的介绍这里写关于签证的介绍这里写关于签证的介绍</p>
            <div class="biaoQian">
            <span>标签</span>
            <span>标签</span>
            <span>标签</span>
        </div>
        </div>
        
    </div>
    <!-- 预定人 -->
    <div class="reserveRen">
        <div class="box">
        <h3>预定人信息</h3>
            <ul>
                <li v-for='(item,index) in reserveRenData' :key='index' >
                    <div class="leftText">
                        <p><b>{{item.Name}}</b><i>{{item.Tel}}</i></p>
                        <span>{{item.type}} | {{item.Occupation}} </span>
                    </div>
                    <img src="./shanchu-2.png" alt="" v-on:click="delRenMsg(index)">
                </li>
            </ul>
            <router-link to='/selectReserve'>选择预定人</router-link>
        </div>

    </div>
    <!-- 出行保障 -->
    <div class="guarantee">
        <div class="box">
        <h3>出行保障</h3>
            <ul>
                <li v-for='(item,index) in guaranteeData' :key='index' v-on:click='guarClick(item,index)'>
                    <div class="leftText">
                        <p>{{item.title}}</p>
                        <span>{{item.content}}</span>
                    </div>
                    <div class="rightText">
                        <i>￥{{item.price}}</i>
                        <img v-if="isGuara.indexOf(item.ID)>-1" src="./right.png" alt="">
                        <img v-else src="./right1.png" alt="">
                    </div>
                </li>
            </ul>
            </div>
    </div>
    <!-- 联系人信息 -->
    <div class="contactsMsg">
        <div class="box">
        <h3>联系人信息</h3>
            <ul>
                <li>
                    <p>联系人姓名</p>
                    <input type="text" v-model='contactsName'>
                </li>
                <li>
                    <p>联系人电话</p>
                    <input type="tel" placeholder="这里写联系人的手机号码" v-model='contactsTel'>
                </li>
                <li>
                    <p>电子邮箱</p>
                    <input type="email" placeholder="这里写联系人的邮箱" v-model='contactsEmail'>
                </li>
            </ul>
        </div>
    </div>
    <!-- 签收信息 -->
    <div class="deliversMsg">
        <div class="box">
        <h3>签收信息</h3>
            <ul>
                <li>
                    <p>快递</p>
                    <input type="text" v-model='express'>
                </li>
                <li>
                    <p>签收地址</p>
                    <input type="tel" placeholder="这里写收货地址" v-model='address'>
                </li>
            </ul>
        </div>
    </div>
    <div class="bottomMask" v-if='showDetail||payType' v-on:click="hideFun()"></div>
    <div class="detailMsgBox" :class="{detailShow:showDetail}">
            <h4>这里写签证的名称</h4>
            <ul>
                <li>
                    <div class="itemTitle">
                        <p>签证价格</p>
                        <i></i>
                    </div>
                    <div class="contentText">
                    <div class="leftDetailMsg">
                        <span>成人签证</span>
                        <span>普通快递</span>
                    </div>
                    <div class="rightDetailMsg">
                        <b>¥550X2</b>
                        <b>¥150</b>
                    </div>
                    </div>
                </li>
                <li>
                    <div class="itemTitle">
                        <p>邮费价格</p>
                        <i></i>
                    </div>
                    <div class="contentText">
                    <div class="leftDetailMsg">
                        <span>普通快递</span>
                    </div>
                    <div class="rightDetailMsg">
                        <b>¥550X2</b>
                    </div>
                    </div>
                </li>
                <li>
                    <div class="itemTitle">
                        <p>出行保障</p>
                        <i></i>
                    </div>
                    <div class="contentText">
                    <div class="leftDetailMsg">
                        <span>这里写保险的名称</span>
                    </div>
                    <div class="rightDetailMsg">
                        <b>¥550X2</b>
                    </div>
                    </div>
                </li>
            </ul>
            
    </div>
    <!-- 支付方式 -->
    <div class="bottomMaskBox" :class="{bottomMaskShow:payType}">
                <h3>支付方式</h3>
            <ul>
                <li v-for="(item,index) in payData" :key='index' v-on:click="payTypeClick(item,index)">
                    <div class="itemTitle">
                        <div class="imgBox">
                        <img :src="item.src" alt="">
                    </div>
                        
                        <p>{{item.Name}}</p>
                    </div>
                    
                    <img v-if="index==payTypeFlag" src="./right.png" alt="">
                </li>
                
            </ul>
    </div>
    <footer>
        <div class="box">
        <div class="textMsg">
            <div class="leftFoot">
                <b>￥19000</b>
                <span>总价</span>
            </div>
            <div class="rightFoot" v-on:click="showDetailFun()">
                <i>明细</i>
                <img src="./doen.png" alt="">
            </div>
        </div>
        <button type="button" v-on:click="showPayFun()">立即支付</button>
        </div>
        
    </footer>
  </div>
</template>

<script>
export default {
  name: 'visaReserve',
  data () {
    return {
        reserveRenData:[
            {
                ID:1,
                Name:'王二小',
                Tel:'13990900909',
                type:'成人',
                Occupation:'在校学生'
            },{
                ID:2,
                Name:'王二小',
                Tel:'13990900909',
                type:'成人',
                Occupation:'在校学生'
            },{
                ID:3,
                Name:'王二小',
                Tel:'13990900909',
                type:'成人',
                Occupation:'在校学生'
            },
        ],
        isGuara:[],
        showImg:-1,
        guaranteeData:[
            {   
                ID:1,
                title:'拒签退款',
                content:'这里写拒签退款的说明',
                price:'567',
            },{   
                ID:2,
                title:'拒签退款',
                content:'这里写拒签退款的说明',
                price:'567',
            }
        ],
        contactsName:'张三',
        contactsTel:100,
        contactsEmail:'',
        express:'顺丰',
        address:'',
        showDetail:false,
        visaShow:false,
        payType:false,
        payTypeFlag:0,
        payData:[
            {
                ID:1,
                src:require("./jiansheyinhang.png"),
                Name:'中国建设银行'
            },{
                ID:1,
                src:require("./nongyeyinhang-.png"),
                Name:'中国农业银行储蓄卡'
            },{
                ID:1,
                src:require("./zhifubao-2.png"),
                Name:'支付宝'
            },{
                ID:1,
                src:require("./weixinzhifu.png"),
                Name:'微信支付'
            },{
                ID:1,
                src:require("./yunshanfu.png"),
                Name:'云闪付'
            },
        ],
    }
  },
  methods: {
      hideFun(){
          this.showDetail=false
          this.payType=false
      },
    //   明细
      showDetailFun(){
          this.showDetail=!this.showDetail
          if(this.showDetail==true){
              this.payType=false
          }
      },
    //   支付方式
      showPayFun(){
          this.payType=!this.payType
          if(this.payType==true){
              this.showDetail=false
          }
      },
       payTypeClick(item,index){
        this.payTypeFlag=index
        this.hideFun()
    },
    // 删除预定人
    delRenMsg(i){
        this.reserveRenData.splice(i,1)
    },
    // 出行保障复选
    guarClick(item,index){
        let id=item.ID
        let indexId=this.isGuara.indexOf(id)
        if(indexId<0){
            this.isGuara.push(id)
        }else{
            this.isGuara.splice(indexId,1)
            
        }
        console.log(this.isGuara)
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";/*引入配置*/
@import "../../common/sass/bottomMask.scss";
.visaReserve{
    padding-top: 0.18rem;
    padding-bottom: 1.4rem;
}
h3{
    @include font-dpr($font_little_mid2);
    @include font_color($font-color-theme2);
    font-weight: bold;
}
.box{
    width: 96%;
    margin: 0 auto;
}
.topModel,.reserveRen,.guarantee,.contactsMsg,.deliversMsg{
    @include bg_color($background-color-theme0);
}
// 顶部模块
.topModel{
    width: 96%;
    margin: 0 auto;
    box-shadow:1px 2px 24px 0px rgba(155,150,143,0.15);
    border-radius:0.12rem;
    padding: 0.28rem 0;
    display: flex;
    margin-bottom: 0.18rem;

    img{
        width: 1.9rem;
        height: 1.38rem;
        margin-right: 0.3rem;
        margin-left: 0.12rem;
    }
    .rightText{
        flex-grow: 1;
        h3{
            line-height: 0.4rem;
        }
        p{
            @include font-dpr($font_little_small);
            @include font_color($font-color-theme3);
            line-height: 0.3rem;
        }
        .biaoQian{
            display: flex;
            padding-top: 0.16rem;
            span{
                padding: 0 0.12rem;
                background: #F7F7F7;
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
                line-height: 0.28rem;
                margin-right: 0.14rem;
            }
        }
    }
}

// 预订人信息
.reserveRen{
    width: 96%;
    margin: 0 auto;
    box-shadow:1px 2px 24px 0px rgba(155,150,143,0.15);
    border-radius:0.12rem;
    padding-top: 0.34rem;
    padding-bottom: 0.34rem;
    margin-bottom: 0.18rem;
    ul{
        width: 100%;
        padding-top: 0.3rem;
        margin-bottom: 0.4rem;
        li{
            display: flex;
            padding: 0.2rem 0;
            border-bottom: 0.01rem solid $border-Color1;
            justify-content: space-between;
            p{
                display: flex;
                padding-bottom: 0.1rem;
                b{
                    @include font-dpr($font_little_mid2);
                    @include font_color($font-color-theme2); 
                    font-weight: normal;
                }
                i{
                    @include font-dpr($font_little_mid3);
                    @include font_color($font-color-theme2); 
                    
                }
            }
            span{
                @include font-dpr($font_little_small);
                @include font_color($font-color-theme4); 
            }
            img{
                width: 0.3rem;
                height: 0.3rem;
            }
            
        }
        
    }
    a{
        margin: 0 auto;
        width: 2.6rem;
        line-height: 0.7rem;
        border:0.02rem solid $border-Color2;
        text-align: center;
        @include font-dpr($font_little_mid3);
        @include font_color($font-color-theme);
        border-radius:0.35rem;
    }
}

// 出行保障
.guarantee{
    width: 96%;
    margin: 0 auto;
    box-shadow:1px 2px 24px 0px rgba(155,150,143,0.15);
    border-radius:0.12rem;
    padding-top: 0.34rem;
    padding-bottom: 0.2rem;
    margin-bottom: 0.18rem;
    ul{
        width: 100%;
        padding-top: 0.3rem;
        li{
            display: flex;
            padding: 0.2rem 0;
            border-bottom: 0.01rem solid $border-Color1;
            justify-content: space-between;
            p{
                @include font-dpr($font_little_mid4);
                @include font_color($font-color-theme2); 
                padding-bottom: 0.1rem;
            }
            span{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme10);
            }
            .rightText{
                display: flex;
                padding-top: 0.2rem;
                i{
                    @include font-dpr($font_little_mid3);
                    @include font_color($font-color-theme2);
                    line-height: 0.36rem;
                    margin-right: 0.2rem;
                }
                img{
                    width: 0.36rem;
                    height: 0.36rem;
                }
            }
        }
        li:last-child{
            border:none;
        }
    }
}
// 联系人信息
.contactsMsg,.deliversMsg{
    width: 96%;
    margin: 0 auto;
    box-shadow:1px 2px 24px 0px rgba(155,150,143,0.15);
    border-radius:0.12rem;
    padding-top: 0.34rem;
    margin-bottom: 0.18rem;
    ul{
        width: 100%;
        padding-top: 0.2rem;
        li{
            display: flex;
            height: 1rem;
            border-bottom: 0.01rem solid $border-Color1;
            p{
                width: 30%;
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme2); 
                line-height: 1rem;
            }
            input{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme2); 
            }
            input::placeholder{
                @include font_color($font-color-theme11); 
            }
        }
        li:last-child{
            border:none;
        }
    }
}
// 底部
footer{
    padding: 0.2rem 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow:2px -5px 20px 0px rgba(188,188,188,0.26);
    @include bg_color($background-color-theme0);
    z-index: 120;
    .box{
        display: flex;
        justify-content: space-between;
        .textMsg{
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            margin-right: 0.4rem;
            .rightFoot{
                display: flex;
            }
            b{
                @include font-dpr($font_little_big0);
                @include font_color($font-color-theme1); 
                line-height: 0.6rem;
            }
            span{
                padding-left: 0.1rem;
            }
            span,i{
                @include font-dpr($font_little_small);
                @include font_color($font-color-theme6); 
            }
            i{
                line-height: 0.8rem;
                margin-right: 0.1rem;
            }
            img{
                width: 0.18rem;
                height: 0.1rem;
                margin-top: 0.38rem;
            }
        
        }
        button{
            box-shadow:-1px 4px 20px 0px rgba(255,163,2,0.39);
            @include font_color($font-color-theme5);
            @include font-dpr($font_little_mid2);
            width: 2.3rem;
            line-height: 0.8rem;
            text-align: center;
            border-radius:0.4rem;
            @include btn_yellow()
        }
        
    }
}
.detailShow{
    bottom:1rem !important;
}
.detailMsgBox{
    position: fixed;
    bottom:-7rem;
    transition:bottom 0.5s;
    width: 100%;
    @include bg_color($background-color-theme0);
    border-radius:0.14rem 0.14rem 0px 0px;
    z-index: 100;
    padding-bottom: 0.4rem;
    box-shadow:2px -5px 20px 0px rgba(188,188,188,0.26);
    h4{
        @include font-dpr($font_little_mid);
        @include font_color($font-color-theme2);
        font-weight: bold;
        padding: 0.4rem 0 0.7rem 0;
    }
    ul,h4{
        width: 94%;
        margin: 0 auto;
    }
    li{
        margin-bottom: 0.5rem;
    }
    .itemTitle{
        display: flex;
        padding-bottom: 0.3rem;
        
        p{
            @include font-dpr($font_little_mid2);
            @include font_color($font-color-theme2);
            margin-right: 0.3rem;
            font-weight: 600;
        }
        i{
            flex-grow: 1;
            height: 0.02rem;
            @include bg_color($background-color-theme7);
            margin-top: 0.14rem;
        }
    }
    .contentText{
        display: flex;
        justify-content: space-between;
        span{
            @include font-dpr($font_little_mid3);
            @include font_color($font-color-theme4);
            padding-bottom: 0.2rem;
        }
        b{
            @include font-dpr($font_little_mid3);
            @include font_color($font-color-theme1);
            padding-bottom: 0.2rem;
        }
    }
    
}

</style>
