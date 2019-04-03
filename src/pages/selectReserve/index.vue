<template>
  <div class="selectReserve">
      <ul>
          <li v-for="(item,index) in listArr" :key='index'>
            <leftSlider @msg-from-child="getMsgFromChild(item,index)">
                <div class="msgBox">
                <div class="leftImg"  @click.stop="checkPersonGroup(index)">
                    <img src="./img/right1.png" alt="" v-if="checkPersonArr.indexOf(index) < 0">
                    <img src="./img/right.png" alt="" v-else>
                </div>
                <div class="midText">
                    <p>{{item.Name}}</p>
                    <span>{{item.Occupation}}&nbsp;|&nbsp;证件号码&nbsp;{{item.passport}}</span>
                </div>
                <div class="editImg" >
                    <img src="./img/editInfo.png" alt="">
                </div>
                
          </div>
            </leftSlider>
              
          </li>
      </ul>
      <router-link to='/addPassenger'>
      <img class="addImg"  src="./img/椭圆 4.png" alt="">
      </router-link>
      <footer>
          <p>已选择预订人：{{checkPersonArr.length}}人</p>
          <button type="button">确定</button>
      </footer>
  </div>
</template>

<script>
import leftSlider from '../../components/scrollDelete'
export default {
  name: 'selectReserve',
  data () {
    return {
        listArr:[{
            ID:1,
            Name:'王二小',
            Occupation:'自由职业',
            passport:10101,


        },{
            ID:1,
            Name:'王二小',
            Occupation:'自由职业',
            passport:10101,


        }],
      checkPersonArr: [],
      contactArr: [],
      position: {}
    }
  },
  components: {
    leftSlider
  },
  methods:{
      checkPersonGroup(index) {
      this.contactArr = []
      if (this.checkPersonArr.indexOf(index) < 0) {
        this.checkPersonArr.push(index)
      } else {
        this.checkPersonArr.splice(this.checkPersonArr.indexOf(index), 1)
      }
      this.checkPersonArr.forEach(item =>{
        this.contactArr.push(this.listArr[item])
      })
    },
    getMsgFromChild(t,i){
        this.listArr.splice(i,1)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
.selectReserve{
    padding-top: 0.2rem;
}
ul{
    width: 96%;
    margin: 0 auto;
    padding-bottom: 1.4rem;
    li{
        width: 100%;
        margin-bottom: 0.2rem;
        
        .msgBox{
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0;
        }
        .leftImg{
            width: 8%;
            img{
                width: 0.36rem;
                height: 0.36rem;
                margin: 0 auto;
            }
        }
        .midText{
            flex-grow: 1;
            p{
                @include font-dpr($font_little_mid2);
                @include font_color($font-color-theme2);
                padding-bottom: 0.24rem;
            }
            span{
                @include font-dpr($font_little_mid3);
                @include font_color($font-color-theme4);
            }
        }
        .editImg{
            position: relative;
            width: 8%;
            img{
                width: 0.28rem;
                height: 0.28rem;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
        }
    }
}
footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-around;
    box-shadow:2px -5px 20px 0px rgba(188,188,188,0.26);
    @include bg_color($background-color-theme0);
    z-index: 100;
    p{
        @include font-dpr($font_little_small);
        @include font_color($font-color-theme2);
        line-height: 0.8rem;
    }
    button{
        box-shadow:-1px 4px 20px 0px rgba(255,163,2,0.39);
        @include font_color($font-color-theme5);
        @include font-dpr($font_little_mid2);
        width: 4.38rem;
        line-height: 0.8rem;
        text-align: center;
        border-radius:0.4rem;
        @include btn_yellow()
    }
}
.addImg{
    position: fixed;
    bottom: 14%;
    right: 3%;
    width: 1rem;
    height: 1rem;
    z-index: 130;
}
</style>

