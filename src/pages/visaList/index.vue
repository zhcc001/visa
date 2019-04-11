<template>

  <div id="visaList">
    <div class="top">
    <div class="topBox">
      <div class="address">
        <span class="city">上海</span>
        <img class="downIcon" src="./sanjiao1.1.png" alt="">
      </div>
      <div class="search">
        <div class="souSuoBox">
        <img class="souSuo" src="./sousuo.png" alt="">
        </div>
        <input class="keyWord" type="text" placeholder="输入签证国家或地区" v-on:focus="enterSearch()">
      </div>
    </div>
    </div>
    <div class="selectBox">
      <div class="selecTitle">
        <ol>
          <li v-on:click="showMask(1)">
            <div class="liDiv">
              <span>更多筛选</span>
              <img v-if='showMore'   src="./sanjiao1.png" alt="">
              <img v-else src="./sanjiao.png" alt="">
            </div>
          </li>
          <li v-on:click="showMask(2)">
            <div class="liDiv">
              <span>目的地</span>
              <img v-if='showDestination'  src="./sanjiao1.png" alt="">
              <img v-else src="./sanjiao.png" alt="">
            </div>
          </li>
          <li v-on:click="showMask(3)">
            <div class="liDiv">
              <span>常住地</span>
              <img v-if="showUsual" src="./sanjiao1.png" alt="">
              <img v-else src="./sanjiao.png" alt="">
            </div>
          </li>
          <li v-on:click="showMask(4)"> 
            <div class="liDiv">
              <span>排序</span>
              <img v-if='showSort' src="./sanjiao1.png" alt="">
              <img v-else src="./sanjiao.png" alt="">
            </div>
          </li>
        </ol>
      </div>
      <div class="mask" v-if='showMore||showDestination||showUsual||showSort' v-on:click=' hideMask(2)'></div>

      <!-- 更多弹层 -->
      <div class="moreBox" v-if='showMore'>
        <div class="typeModel">
        <h3>签证类型</h3>
        <div class="modelSpan">
          <span :class="{active:allType}" v-on:click='checkAllType()'>全部</span>
          <span v-for="(item,index) in typeModelData" :key="index" :class="{active:isType.indexOf(item.ID)>-1}"
                v-on:click="typeCheck(item)">{{item.Name}}</span>
          
        </div>
        </div>
        <div class="serviceModel">
          <h3>特色服务</h3>
        <div class="modelSpan">
          <span :class="{active:allService}" v-on:click='checkAllService()'>全部</span>
          <span v-for="(item,index) in serviceModelData" :key="index" :class="{active:isService.indexOf(item.ID)>-1}"
                v-on:click="serviceCheck(item)">{{item.Name}}</span>
        </div>
        </div>
        <div class="entryNum">
           <h3>入境次数</h3>
        <div class="modelSpan">
          <span :class="{active:allEntry}" v-on:click='checkAllEntry()'>全部</span>
          <span v-for="(item,index) in entryNumData" :key="index" :class="{active:isEntryNum.indexOf(item.ID)>-1}"
                v-on:click="entryNumCheck(item)">{{item.Name}}</span>
        </div>
        </div>
        <div class="footer">
          <button type="button" class="cancel" v-on:click="hideMask(1)">取消</button>
          <button type="button" class="sure" v-on:click="sureClick()">确定</button>
        </div>
      </div>

      <!-- 目的地 -->
      <div class="destination" v-if='showDestination'>
        <div class="leftBox" :class="{leftBoxActive:allCountryFlag}">
          <ol>
            <li :class="{leftActive:allCountry,leftBoxActive:allCountryFlag}" v-on:click="allCountryClick()"><span>全部国家</span></li>
            <li :class="{leftActive:index==itemCountry}" v-for='(item,index) in leftCountry' :key='index' v-on:click='itemCountryClick(item,index)'><span>{{item.Name}}</span></li>
          </ol>
        </div>
        <div class="rightBox" v-if='rightCity'>
          <ul>
            <li :class="{cityActive:allCity}" v-on:click='checkAllCity()'>{{alltext}}全部</li>
            <li v-for="(item,index) in cityData" :key="index" :class="{cityActive:index==isCity}"
                v-on:click="cityCheck(item,index)">{{item.Name}}</li>
          </ul>
        </div>
      </div>
      <!-- 常住地 -->
      <div class="usualBox" v-if='showUsual'>
          <h3>常住地</h3>
          <ul>
            <li :class="{cityActive:allUsualCity}" v-on:click='checkAllusualCity()'>不限地区</li>
            <li v-for="(item,index) in usualCityData" :key="index" :class="{cityActive:index==isUsualCity}"
                v-on:click="usualCityCheck(item,index)">{{item.Name}}</li>
          </ul>
      </div>
      <!-- 排序 -->
      <div class="sortBox" v-if='showSort'>
        <ul>
          <li :class="{sortActive:index==itemSort}" v-for='(item,index) in sortData' :key='index' v-on:click='itemSortClick(item,index)'>{{item.Name}}</li>
        </ul>
      </div>
    </div>
    <div class="visaList">
      <ul>
        <li v-on:click="enterReserve()">
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
  </div>
</template>

<script>
export default {
  name: 'visaList',
  data () {
    return {
      // 更多弹层变量
      showMore:false,
      // 签证类型
      allType:true,
      isType:[],
      typeModelData:[
        {
          ID:1,
          Name:'旅游签证',
        },{
          ID:2,
          Name:'商务签证',
        },{
          ID:3,
          Name:'探亲访友签证',
        }
      ],
      // 特色服务
      allService:true,
      isService:[],
      serviceModelData:[
        {
          ID:1,
          Name:'加急',
        },{
          ID:2,
          Name:'免面试',
        },{
          ID:3,
          Name:'拒签退全款',
        },{
          ID:1,
          Name:'简化材料',
        },{
          ID:2,
          Name:'免押金',
        },{
          ID:3,
          Name:'双向包邮',
        }
      ],
      // 入境次数
      allEntry:true,
      isEntryNum:[],
      entryNumData:[
        {
          ID:1,
          Name:'一次',
        },{
          ID:2,
          Name:'两次',
        },{
          ID:3,
          Name:'多次',
        }
      ],
      // 目的地变量
      allCountry:true,
      allCountryFlag:false,
      itemCountry:-1,
      showDestination:false,
      leftCountry:[
         {
           ID:2,
          Name:'亚洲',
          list:[{
            ID:10,
            Name:'日本',
            },{
            ID:11,
            Name:'韩国',
            },{
            ID:12,
            Name:'泰国',
            }],
        },{
           ID:3,
          Name:'美洲',
          list:[{
            ID:13,
            Name:'美国',
            },{
            ID:14,
            Name:'加拿大',
            },{
            ID:15,
            Name:'泰国',
            }],
        },{
           ID:4,
          Name:'大洋洲',
          list:[{
            ID:16,
            Name:'冰岛',
            },{
            ID:17,
            Name:'韩国',
            },{
            ID:18,
            Name:'泰国',
            }],
        },{
           ID:5,
          Name:'欧洲',
          list:[{
            ID:19,
            Name:'英国',
            },{
            ID:20,
            Name:'德国',
            },{
            ID:21,
            Name:'泰国',
            }],
        },{
           ID:6,
          Name:'非洲',
          list:[{
            ID:22,
            Name:'哥斯达黎加',
            },{
            ID:23,
            Name:'韩国',
            },{
            ID:24,
            Name:'泰国',
            }],
        }
      ],
      allCity:false,
      rightCity:false,
      isCity:-1,
      cityData:[],
      cityID:0,
      // 常住地
      showUsual:false,
      allUsualCity:true,
      isUsualCity:-1,
      usualCityID:0,
      usualCityData:[{
        ID:1,
        Name:'上海'
      },{
        ID:2,
        Name:'北京'
      },{
        ID:3,
        Name:'广州'
      },{
        ID:4,
        Name:'深圳'
      },],
      // 排序
      showSort:false,
      itemSort:-1,
      sortData:[{
        ID:1,
        Name:"智能排序"
      },{
        ID:2,
        Name:"价格从低到高"
      },{
        ID:3,
        Name:"价格从高到低"
      },{
        ID:4,
        Name:"销量从低到高"
      },{
        ID:5,
        Name:"销量从高到低"
      },],

    }
  },
  methods:{
    
    showMask(num){
      if(num==1){// 显示更多弹层
      this.showMore=!this.showMore
      if(this.showMore==true){
        this.hideMask(2)
      }
      }else if(num==2){
        this.showDestination=!this.showDestination
        if(this.showDestination==true){
        this.hideMask(1)
        this.showUsual=false
        this.showSort=false
        }
      }else if(num==3){
        this.showUsual=!this.showUsual
        if(this.showUsual==true){
          this.showDestination=false
          this.showSort=false
          this.hideMask(1)
        }
        
      }else if(num==4){
        this.showSort=!this.showSort
        if(this.showSort==true){
          this.showDestination=false
          this.showUsual=false
          this.hideMask(1)
        }
      }
    },
    // 关闭弹层
    hideMask(num){
      if(num==1){
        this.showMore=false
      }else if(num==2){
        this.showDestination=false
        this.showUsual=false
        this.showSort=false
      }
    },
    // 签证类型选择
    typeCheck(item) {
        this.allType = false
        let id = item.ID
        let indexId = this.isType.indexOf(id);
        if (indexId < 0) {
          this.isType.push(id);
        } else{
          if(this.isType.length>1){
            this.isType.splice(indexId,1)
          }
          
        }
        
      },
      //全部签证类型
      checkAllType() {
        this.allType = true
        this.isType = []
      },
      // 特色服务
    serviceCheck(item) {
        this.allService = false
        let id = item.ID
        let indexId = this.isService.indexOf(id);
        if (indexId < 0) {
          this.isService.push(id);
        } else{
          if(this.isService.length>1){
            this.isService.splice(indexId,1)
          }
          
        }
        
      },
      //全部特色服务
      checkAllService() {
        this.allService = true
        this.isService = []
      },
      // 入境次数
    entryNumCheck(item) {
        this.allEntry = false
        let id = item.ID
        let indexId = this.isEntryNum.indexOf(id);
        if (indexId < 0) {
          this.isEntryNum.push(id);
        } else{
          if(this.isEntryNum.length>1){
            this.isEntryNum.splice(indexId,1)
          }
          
        }
        
      },
      //全部入境次数
      checkAllEntry() {
        this.allEntry = true
        this.isEntryNum = []
      },
      sureClick(){
        this.hideMask(1)
      },
      // 目的地
      itemCountryClick(item,index){
        this.cityData=[]
        this.isCity=-1
        this.allCountry=false
        this.allCountryFlag=true
        this.itemCountry=index
        this.rightCity=true
        this.alltext=item.Name
        this.cityData=this.leftCountry[index].list
      },
      // 全部国家
      allCountryClick(){
        this.allCountry=true
        this.allCountryFlag=false
        this.itemCountry=-1
        this.rightCity=false
        this.hideMask(2)
      },
      // 选择城市
      cityCheck(item,index){
        this.allCity=false
        this.isCity = index
        this.cityID=item.ID
        this.hideMask(2)
        
      },
      checkAllCity(){
        this.allCity=true
        this.isCity=-1
      },

      // 常住地
      usualCityCheck(item,index){
        this.allUsualCity=false
        this.isUsualCity = index
        this.usualCityID=item.ID
        this.hideMask(2)
      },
      // 不限地区
      checkAllusualCity(){
        this.allUsualCity=true
        this.isUsualCity = -1
        this.hideMask(2)
      },
      // 排序
      itemSortClick(item,index){
        this.itemSort=index
        this.hideMask(2)
      },
    // 进入搜索页
    enterSearch(){
      this.$router.push('/Search')
    },
    enterReserve(){
      this.$router.push('/visaDetail')
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../common/sass/commonStyle.scss';
@import '../../common/sass/list.scss';
@import '../../common/sass/mask.scss';


</style>
