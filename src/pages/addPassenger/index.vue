<template>
  <div class="addReserve">
    <div class="tips">
      <p>提示 :这里写办理签证的相关提示内容这里写办理签证的相关</p>
    </div>
    <!-- 联系人信息 -->
    <div class="contactsMsg">
        <div class="box">
            <ul>
                <li>
                    <p>姓名<img src="./wenhao.png" alt=""></p>
                    <input type="text" v-model='name' placeholder="与证件的姓名保持一致 ">
                </li>
                <li v-on:click="showTypeFun()">
                    <p>客户类型类型</p>
                    <input type="text"  v-model='type' readonly="readonly" unselectable="on" onfocus="this.blur()">
                    <img src="./more.png" alt="" >
                </li>
                <li>
                    <p>护照号码</p>
                    <input type="num" placeholder="请输入公民证件号码" v-model='passport'>
                </li>
                <li>
                    <p>手机号码</p>
                    <input type="tel" placeholder="请输入联系人手机号码" v-model='tel'>
                </li>
            </ul>
        </div>
    </div>
    <button type="button">确定</button>
    <div class="bottomMask" v-if="showType" v-on:click="hideType()"></div>
    <div class="bottomMaskBox" :class="{bottomMaskShow:showType}">
      <h3>客户类型</h3>
      <ul>
        <li v-for="(item,index) in typeData" :key='index' v-on:click="typeClick(item,index)">
          <p :class='{active:index==typeFlag}'>{{item.Name}}</p>
          <img v-if="index==typeFlag" src="./right.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addReserve',
  data () {
    return {
      passport:'',
      tel:'',
      type:'',
      name:'',
      showType:false,
      typeData:[
        {
          ID:1,
          Name:'在职员工',
        },{
          ID:2,
          Name:'自由职业',
        },{
          ID:3,
          Name:'在校学生',
        },{
          ID:4,
          Name:'退休人员',
        },
      ],
      typeFlag:-1,
    }
  },
  methods:{
    // 显示客户类型
    showTypeFun(){
      this.showType=true
    },
    hideType(){
      this.showType=false
    },
    typeClick(item,index){
      this.typeFlag=index
      this.type=item.Name
      this.hideType()
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";/*引入配置*/
@import "../../common/sass/bottomMask.scss";
.box{
    width: 96%;
    margin: 0 auto;
}
.tips{
  width: 100%;
  padding: 0.26rem 0;
  @include bg_color($background-color-theme12);
  margin-bottom: 0.2rem;
  p{
    @include font-dpr($font_little_small1);
    @include font_color($font-color-theme3);
    padding-left: 0.28rem;
    line-height: 0.26rem;
  }
}
// 联系人信息
.contactsMsg{
    width: 94%;
    margin: 0 auto;
    box-shadow:1px 2px 24px 0px rgba(155,150,143,0.15);
    border-radius:0.12rem;
    margin-bottom: 0.18rem;
    @include bg_color($background-color-theme0);
    ul{
        width: 100%;
        li{
            display: flex;
            height: 1rem;
            border-bottom: 0.01rem solid $border-Color1;
            img{
              width: 0.16rem;
              height: 0.3rem;
              margin-top: 0.34rem;
            }
            p{
                width: 34%;
                @include font-dpr($font_little_mid2);
                @include font_color($font-color-theme2); 
                line-height: 1rem;
                display: flex;
                img{
                  width: 0.2rem;
                  height: 0.2rem;
                  margin-top: 0.36rem;
                  margin-left: 0.1rem;
                }
            }
            input{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme2); 
                flex-grow: 1;
            }
            input::placeholder{
                @include font_color($font_little_mid3); 
            }
        }
        li:last-child{
            border:none;
        }
    }
}
button{
            box-shadow:-1px 4px 20px 0px rgba(255,163,2,0.39);
            @include font_color($font-color-theme5);
            @include font-dpr($font_little_mid2);
            position: absolute;
            width: 90%;
            bottom: 0.3rem;
            left: 0;
            right: 0;
            margin: auto;
            line-height: 1rem;
            text-align: center;
            border-radius:0.5rem;
            @include btn_yellow()
        }
</style>
