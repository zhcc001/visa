<template>
  <div class="visaDetail">
    <img class="topBanner" src="./jhk-1553501493778.png" alt="">
        <div class="topMsg">
            <div class="nulBox">
             <div class="box">
            <h2>【上海领区】意大利旅游签-除西藏全国</h2>
            <div class="biaoQian">
                <span>签证的标签</span>
                <span>签证的标签</span>
                <span>签证的标签</span>
            </div>
            <div class="star">
                <img src="./start.png" alt="">
                <span>4.5</span>
                <p>|&nbsp;&nbsp;已售350件</p>
            </div>
            <div class="priceBox">
                <div class="leftText">
                <b>1233<span>/人</span></b>
                <p>价格明细></p>
                </div>
                <span>评价(213条）</span>
            </div>

        </div>
    </div>
    </div>
    <div class="detailModel">
        <div class="modelTitle">
                <i class="line"></i>
                <h3>签证详情</h3>
        </div>
        <div class="box">
            <ol>
                <li>
                    <p>有效期限</p>
                    <h5>3个月</h5>
                    </li>
                     <li>
                        <p>滞留时间</p>
                        <h5>1-15个天</h5>
                    </li>
                     <li>
                        <p>办理时长</p>
                        <h5>4-5个工作日</h5>
                    </li>
                     <li>
                        <p>入境次数</p>
                        <h5>1次</h5>
                    </li>
                     <li>
                        <p>签证类型</p>
                        <h5>旅游签</h5>
                    </li>
                     <li>
                        <p>是否免签</p>
                        <h5>否</h5>
                    </li>

                </ol>
        </div>
    </div>
    <div class="moreDetail">
        <div class="modelTable">
            <ol>
                <li :class="{active:index==titleFlag}" v-for="(item,index) in titleData" :key="index" v-on:click="modelClick(item,index)">
                    <a :href="item.hrefName">
                        <p class="text5b">{{item.name}}</p>
                        <i class="line"></i>
                    </a>
                </li>
            </ol>
        </div>

        <!-- 产品介绍 -->
        <div class="proIntroduction" id="proIntroduction">
            <div class="box">
                <h3>产品介绍</h3>
                <div class="range">
                    <div class="proTitle">
                        <img src="./shouli.png" alt="">
                        <h3>受理范围</h3>
                    </div>
                    <div class="rangeContent">
                        <p class="text5b">
                            1、中国大陆因私护照;
                        </p>
                        <p class="text5b">
                            2、80周岁(含)以上或14周岁以下申请者，如从未被拒签        
                        过，本人无需前往领馆面试，可以通过中信银行的签证“代传递”程序申请签证;
                        </p>
                        <p class="text5b">
                            3、拒签退服务费不含以下情况:有非法滞留过该国或有记录的，有过任何犯罪或不良记录的，提供虚假材料的，面试时回答面试官问题与提交内容不符的，户籍在江浙沪皖以外提供不了以上4地有效暂住证或居住证的
                        </p>
                    </div>
                </div>
                <div class="range">
                    <div class="proTitle">
                        <img src="./taocan.png" alt="">
                        <h3>套餐描述</h3>
                    </div>
                    <div class="rangeContent">
                        <p class="text5b">
                            1.建议提前一个月办理
                        </p>
                        <p class="text5b">
                            2.费用包含:签证费
                        </p>
                        <p class="text5b">
                            3.费用不包含:邮寄费+服务费+专业审核材料+一对一服
                        </p>
                        <p class="text5b">
                            4.特别注意:北京领区社保1年以上，年收入够10万，最后
                            有10万余额银行流水显示工资并且在职证明需要使用我司模板，全日制本科学历，毕业3年以内
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="nullBox"></div>
        <!-- 所需材料 -->
        <div class="requireData" id="requireData">
            <div class="box">
                <h3>所需材料</h3>
            </div>
            <div class="occupational">
                <div class="swiperBox">
                <swiper :options="swiperCaiLiaoOption" ref="mySwiper" @slideChangeTransitionEnd="getCaiLiao">
                    <swiper-slide v-for='(item,index) in caiLiaoData' :key='index'>
                        <div class="imgBg">
                            <img :src="item.iconSrc" alt="">
                        </div>
                        <p>{{item.roleName}}</p>
                    </swiper-slide>
                    
                </swiper>
                </div>
                <div class="caiLiaoBox">
                    <div class="box">
                        <ul>
                            <li v-for="(item,index) in list" :key='index'>
                                <div class="caiLiaoTitle">
                                    <img :src="item.imgSrc" alt="">
                                    <h3>{{item.title}}</h3>
                                </div>
                                <div class="caiLiaoTxet" v-if="moreMsg">
                                <p>{{item.describe}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="openBtn" v-on:click="moreMsgFun"><div><span>{{moreMsg==false?'展开':'收起'}}</span><img :class="{imgDeg:!moreMsg}" src="./shouqi.png" alt=""></div></div>
                </div>
            </div>
        </div>
        <div class="nullBox"></div>
        <!-- 办理流程 -->
        <div class="process" id="process">
            <div class="box">
                <h3>办理流程</h3>
                <div class="processContent">
                    <div class="itemProcess" v-for="(item,index) in procesData" :key="index">
                    <div class="processTitle">
                        <img src="./椭圆 3 拷贝.png" alt="">
                        <h3>{{item.title}}</h3>
                    </div>
                    <div class="processText">
                        <p>
                           {{item.text}}
                        </p>
                    </div>
                    </div>
                </div>  
            </div>
        </div>
        <div class="nullBox"></div>
        <!-- 购买须知 -->
        <div class="buyKnow" id="buyKnow">
            <div class="box">
                 <h3>购买须知</h3>
                 <div class="buyKnowContent">
                     <ul>
                            <li v-for="(item,index) in buyKnowData" :key='index'>
                                <div class="caiLiaoTitle">
                                    <img :src="item.iconSrc" alt="">
                                    <h3>{{item.title}}</h3>
                                </div>
                                <div class="caiLiaoTxet" >
                                <p>{{item.text}}</p>
                                </div>
                            </li>
                        </ul>
                 </div>
            </div>
        </div>

        
    </div>
        <!-- 底部 -->
    
    <footer>
            <div class="box">
                <div class="keFu">
                    <img src="./zixun.png" alt=""/>
                    <p>咨询客服</p>
                </div>
                <div class="like">
                    <img src="./shoucang.png" alt="">
                    <p>收藏</p>
                </div>
                <router-link to="/visaReserve">
                    <button type="button">立即预订</button>
                </router-link>
            </div>
        </footer>
</div>
</template>

<script>
export default {
  name: 'visaDetail',
  data () {
    return {
        moreMsg:false,
        showIndex:0,
        list:[],
        listIndex:0,
        swiperCaiLiaoOption:{
            notNextTick: true,
            slidesPerView: 3,
            spaceBetween: 30,
            initialSlide :2,
	        centeredSlides: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            on: {
                      //切换结束时，告诉我现在是第几个slide
                    slideChangeTransitionEnd: function(){
                        let that=this
                        that.showIndex=that.activeIndex
                        console.log(that.showIndex)
                        // that.getCaiLiao(that.showIndex)
                        
                    },
                },

        },
        titleFlag:0,
        titleData:[{
            ID:1,
            name:"产品介绍",
            hrefName:'#proIntroduction'
        },{
            ID:2,
            name:"所需材料",
            hrefName:'#requireData'
        },{
            ID:3,
            name:"办理流程",
            hrefName:'#process'
        },{
            ID:4,
            name:"购买须知",
            hrefName:'#buyKnow'
        },],
        list:[],
        caiLiaoData:[
            {
                ID:1,
                roleName:'在职',
                iconSrc:require("./4-4.png"),
                roleList:[{
                    ID:1,
                    title:'护照',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'本人有效期6个月以上的因私护照;如是换发护照，请提供旧护照原件',
                },{
                    ID:2,
                    title:'照片(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:3,
                    title:'在职证明(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:4,
                    title:'活期银行卡对账单(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:5,
                    title:'日本个人资料表',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:6,
                    title:'固定资产(尽量提供，可提高出签率)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:7,
                    title:'户口本复印件',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                }]
            },{
                ID:2,
                roleName:'在校学生',
                iconSrc:require("./4-4.png"),
                roleList:[{
                    ID:1,
                    title:'护照',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'本人有效期6个月以上的因私护照;如是换发护照，请提供旧护照原件',
                },{
                    ID:2,
                    title:'照片(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:3,
                    title:'在职证明(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                }]
            },{
                ID:3,
                roleName:'自由职业',
                iconSrc:require("./组-27.png"),
                roleList:[{
                    ID:1,
                    title:'护照',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'本人有效期6个月以上的因私护照;如是换发护照，请提供旧护照原件',
                },{
                    ID:2,
                    title:'照片(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:3,
                    title:'在职证明(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:6,
                    title:'固定资产(尽量提供，可提高出签率)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:7,
                    title:'户口本复印件',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                }]
            },{
                ID:4,
                roleName:'退休人员',
                iconSrc:require("./1.png"),
                roleList:[{
                    ID:1,
                    title:'护照',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'本人有效期6个月以上的因私护照;如是换发护照，请提供旧护照原件',
                },{
                    ID:2,
                    title:'照片(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:3,
                    title:'在职证明(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:4,
                    title:'活期银行卡对账单(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                },{
                    ID:6,
                    title:'固定资产(尽量提供，可提高出签率)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                }]
            },{
                ID:5,
                roleName:'学龄前儿童',
                iconSrc:require("./2.png"),
                roleList:[{
                    ID:1,
                    title:'护照',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'本人有效期6个月以上的因私护照;如是换发护照，请提供旧护照原件',
                },{
                    ID:2,
                    title:'照片(原件)',
                    original:false,
                    isMust:false,
                    Template:'http://www.baidu.com',
                    imgSrc:require("./shouli.png"),
                    describe:'二寸白底彩色近照2张，照片尺寸要求45x45mm,请在照片背面用铅笔写上自己的姓名',
                }]
            },],
            procesData:[{
                ID:1,
                title:"下单并支付",
                text:" 请根据您实际出行时间，在线选择对应签证产品并进行下单支付。*不接收6个月内有拒签记录的护照*下单后如遇任何问题可随时与途牛专属客服联系",

            },{
                ID:2,
                title:"材料审核",
                text:" 请根据您实际出行时间，在线选择对应签证产品并进行下单支付。*不接收6个月内有拒签记录的护照*下单后如遇任何问题可随时与途牛专属客服联系",

            },{
                ID:3,
                title:"送签",
                text:" 请根据您实际出行时间，在线选择对应签证产品并进行下单支付。*不接收6个月内有拒签记录的护照*下单后如遇任何问题可随时与途牛专属客服联系",

            },{
                ID:4,
                title:"出签及配送",
                text:" 请根据您实际出行时间，在线选择对应签证产品并进行下单支付。*不接收6个月内有拒签记录的护照*下单后如遇任何问题可随时与途牛专属客服联系",

            },],
            buyKnowData:[{
                ID:1,
                title:'在职',
                iconSrc:require("./shouli.png"),
                text:'订单支付成功后，买家未办理(即资料未快递/邮件给商家)，可与商家协商退款;订单有效期为3个月，买家在有效期内未办理，视为自动放弃，予以退款处理，敬请谅解;若商家已为您递交资料或已付费预约，已支付订单款项无法退还，敬请谅解;非拒签可退款套餐，若发生拒签则已支付订单款项无法退还，敬请谅解。'
            },{
                ID:2,
                title:'重要提示',
                iconSrc:require("./taocan.png"),
                text:'订单支付成功后，买家未办理(即资料未快递/邮件给商家)，可与商家协商退款;订单有效期为3个月，买家在有效期内未办理，视为自动放弃，予以退款处理，敬请谅解;若商家已为您递交资料或已付费预约，已支付订单款项无法退还，敬请谅解;非拒签可退款套餐，若发生拒签则已支付订单款项无法退还，敬请谅解。'
            },]
        }
        
    },
    watch:{
    },
    created(){
        // this.getCaiLiao()
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
        this.getCaiLiao()
    },
    methods:{
       getCaiLiao(){
           this.list=this.caiLiaoData[this.swiper.activeIndex].roleList
           
       },
       
       moreMsgFun(){
           this.moreMsg=!this.moreMsg
       },
       modelClick(item,index){
           this.titleFlag=index
       },
            
    },
}
</script>

<style lang="scss" scoped>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
.topBanner{
    width: 100%;
}

.text5b{
    @include font-dpr($font_little_mid3);
     @include font_color($font-color-theme3);
}
.topMsg{
    position: relative;
    height: 2.6rem;
    margin-bottom: 0.2rem;
    .nulBox{
        width: 100%;
        @include bg_color($background-color-theme0);
        border-radius: 0.14rem 0.14rem 0 0;
        position: absolute;
        top:-0.38rem;
        padding-bottom: 0.32rem;
        h2{
            @include font-dpr($font_little_mid);
            @include font_color($font-color-theme2);
            font-weight: bold;
            padding-top: 0.38rem;
            margin-bottom: 0.24rem;
        }
        .biaoQian{
            display: flex;
            margin-bottom: 0.36rem;
            span{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
                border:0.02rem solid $border-Color4;
                margin-right: 0.1rem;
                border-radius: 0.06rem;
                padding: 0 0.1rem;
                line-height: 0.34rem;
            }
        }
        .star{
            display: flex;
            margin-bottom: 0.26rem;
            img{
                width: 0.18rem;
                height: 0.18rem;
                margin-right: 0.06rem;
            }
            span{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme);
                margin-right: 0.14rem;
            }
            p{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
            }
        }
        .priceBox{
            display: flex;
            justify-content: space-between;
            .leftText{
                display: flex;
            }
            b{
                 @include font-dpr($font_little_big);
                 @include font_color($font-color-theme1);
                
                display: flex;
                span{
                   @include font-dpr($font_little_small1);
                   @include font_color($font-color-theme4);
                   padding-top: 0.14rem;
                }
            }
            p{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
                margin-left: 0.26rem;
                padding-top: 0.14rem;
            }
            span{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
                padding-top: 0.14rem;
            }
        }
    }
}
h3{
    @include font-dpr($font_little_mid2);
    @include font_color($font-color-theme2);
    font-weight: bold;
}
.proIntroduction h3,.requireData h3,.process h3,.buyKnow h3{
            text-align: center;
        }
.line{
    @include btn_yellow();
    border-radius: 0.03rem;
}
.nullBox{
    width: 100%;
    height: 0.2rem;
    @include bg_color($background-color-theme6);
}
// 签证详情模块
.detailModel{
    width: 100%;
    @include bg_color($background-color-theme0);
    margin-bottom: 0.2rem;
    .modelTitle{
        padding: 0.2rem 0 0.2rem 0.28rem;
        border-bottom:0.02rem solid $border-Color1;
        display: flex;
        .line{
            width: 0.06rem;
            height: 0.4rem;
            margin-right: 0.24rem;
        }
        h3{
            line-height: 0.4rem;
        }

    }
    ol{
        padding-bottom: 0.32rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;
        li{
            margin-top: 0.5rem;
            width: 30%;
            p{
                @include font-dpr($font_little_small1);
                @include font_color($font-color-theme4);
                text-align: center;
                padding-bottom: 0.1rem;
            }
            h5{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme2);
                text-align: center;
                font-weight: bold;
            }
        }
    }

}
.moreDetail{
    width: 100%;
    @include bg_color($background-color-theme0);
    padding-bottom: 1.4rem;
    .modelTable{
        box-shadow:0px 1px 12px 0px rgba(188,188,188,0.12);
        ol{
            width: 92%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding-top: 0.3rem;
            li{
                p{
                    padding-bottom: 0.26rem;
                }
                i{
                    width: 0.64rem;
                    height: 0.06rem;
                    box-shadow:-1px 4px 7px 0px rgba(255,163,2,0.18);
                    opacity: 0;
                    margin: 0 auto;
                }

            }
            li.active{
                p{
                    @include font-dpr($font_little_mid2);
                    @include font_color($font-color-theme);
                }
                i{
                    opacity:1;
                }
            }
        }
    }
    // 产品介绍
    .proIntroduction{
        padding-top: 0.5rem;
        margin-bottom: 0.2rem;
        
        .proTitle{
            display: flex;
            padding-top: 0.5rem;
            img{
                width: 0.36rem;
                height: 0.36rem;
                margin-right: 0.16rem;
            }
        }
        .rangeContent{
            width: 90%;
            margin: 0 auto;
            padding-top: 0.24rem;
            padding-bottom: 0.24rem;
            p{
                line-height: 0.34rem;
            }
        }
    }
    // 所需材料
    .requireData{
        padding-top: 0.5rem;
        margin-bottom: 0.2rem;
        .swiperBox{
            padding-top: 0.3rem;
            margin-bottom: 0.7rem;
            .imgBg{
                @include imgbg1();
                width: 0.78rem;
                height: 0.78rem;
                margin: 0 auto;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            p{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme8);
                text-align: center;
                padding-top: 0.2rem;
            }
        }
        li{
            margin-bottom: 0.5rem;
            .caiLiaoTitle{
            display: flex;
                img{
                    width: 0.36rem;
                    height: 0.36rem;
                    margin-right: 0.14rem;
                }
            
            }
            .caiLiaoTxet{
                @include bg_color($background-color-theme6);
                padding:0.32rem 0;
                width: 94%;
                margin: 0 auto;
                margin-top: 0.2rem;
                
                p{
                    @include font-dpr($font_little_mid3);
                    @include font_color($font-color-theme3);
                    padding: 0 0.26rem;
                    line-height: 0.3rem;
                }
            }
        }
        .openBtn{
            width: 2.26rem;
            border-radius:0.4rem;
            border:0.02rem solid $border-Color2;
            margin: 0 auto;
            display: flex;
            line-height: 0.76rem;
            div{
                margin: 0 auto;
                display: flex;
            }
            span{
                @include font-dpr($font_little_mid2);
                @include font_color($font-color-theme);
            }
            img{
                width: 0.26rem;
                height: 0.26rem;
                margin-top: 0.2rem;
                margin-left: 0.2rem;
            }
            img.imgDeg{
                transform: rotateZ(180deg)
            }
        }
        
    }
}

// 办理流程
.process{
    padding-top: 0.54rem;
    .processContent{
        padding-top: 0.5rem;
        .processTitle{
            display: flex;
            h3{
                font-weight: normal;
            }
            img{
                width: 0.2rem;
                height: 0.2rem;
                margin-right: 0.24rem;
                margin-top: 0.06rem;
            }
        }
        .processText{
            border-left: 0.02rem dashed $border-Color1;
            padding:0.24rem 0 0.4rem 0.3rem;
            margin-left: 0.1rem;
            p{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme3);
                line-height: 0.3rem;
            }
        }
    }
}
// 购买须知
.buyKnow{
    padding-top: 0.5rem;
    .buyKnowContent{
        padding-top: 0.5rem;
        li{
            margin-bottom: 0.5rem;
            .caiLiaoTitle{
            display: flex;
                img{
                    width: 0.36rem;
                    height: 0.36rem;
                    margin-right: 0.14rem;
                }
            
            }
            .caiLiaoTxet{
                width: 94%;
                margin: 0 auto;
                margin-top: 0.2rem;
                
                p{
                    @include font-dpr($font_little_mid3);
                    @include font_color($font-color-theme3);
                    padding: 0 0.26rem;
                    line-height: 0.3rem;
                }
            }
        }
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
            width: 0.48rem;
            height: 0.48rem;
            margin:0 auto;
            margin-bottom: 0.08rem;
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
                width: 0.44rem;
                height: 0.42rem;
                margin:0 auto;
                margin-bottom: 0.12rem;
                
            }
        }
        a{
            flex-grow: 1;
            box-shadow:-1px 4px 20px 0px rgba(255,163,2,0.39);
            border-radius:0.4rem;
            @include btn_yellow();
            button{
                width: 100%;
                @include font_color($font-color-theme5);
                @include font-dpr($font_little_mid2);
                line-height: 0.8rem;
                text-align: center;
            }
        }

}
</style>
