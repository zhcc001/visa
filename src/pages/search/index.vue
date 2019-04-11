<template>
  <div id="search">
    <div class="topBox">
        <div class="search">
            <div class="souSuoBox">
                <img class="souSuo" src="./sousuo.png" alt="">
            </div>
        <input class="keyWord" type="text" placeholder="输入签证国家或地区">
      </div>
    </div>
    <div class="searchHistory">
        <h6>历史搜索</h6>
        <ol>
            <li v-for="(item,index) in hisCountry" :key="index">{{item.Name}}</li>
        </ol>
    </div>
    <div class="hotCountry">
        <h6>热门国家</h6>
        <ol>
            <li v-for="(item,index) in hotCountry" :key="index">{{item.Name}}</li>
        </ol>
    </div>
    <div class="countryList">
        <h6>国家名称</h6>
        <cube-index-list :data="cityData" @select="selectItem" >
      <cube-index-list-group v-for="(group, index) in cityData" :key="index" :group="group">
          <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item">
          <div class="custom-item"><b>{{item.name}}</b><span>{{item.country}}</span></div>
          </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
        hisCountry:[{
            value:12,
            Name:"韩国",
        },{
            value:12,
            Name:"法国",
        },{
            value:12,
            Name:"泰国",
        },],
        hotCountry:[{
            value:12,
            Name:"韩国",
        },{
            value:13,
            Name:"法国",
        },{
            value:14,
            Name:"泰国",
        },{
            value:15,
            Name:"日本",
        },{
            value:16,
            Name:"加拿大",
        },{
            value:16,
            Name:"菲律宾",
        },{
            value:16,
            Name:"加拿大",
        }],
        title: 'Current City: BEIJING',
        cityData :[
        {
          "name": "A",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "B",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "C",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "D",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "E",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "F",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },{
          "name": "G",
          "items": [
            {
              "name": "A上海",
              "value": 3,
              "country":"中国"
            },
            {
              "name": "A北京",
              "value": 4,
              "country":"中国"
            }]
        },]
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    },
    onPullingUp() {
      // Mock async load.
      setTimeout(() => {
        const length = this.data.length
        if (length < cityData.length) {
          // Update data.
          this.data.push(cityData[length])
        }
        // Call forceUpdate after finishing data load.
        this.$refs.indexList.forceUpdate()
      }, 1000)
    }
  }
  
}
</script>

<style lang='scss' scoped>
@import '../../common/sass/commonStyle.scss';
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
#search{
    height: 100vh;
    @include bg_color($background-color-theme0);
}
.searchHistory,.hotCountry,.countryList{
  width: 94%;
  margin: 0 auto;
  padding-top:0.3rem;
}
h6{
    font-size: 0.28rem;
    @include font_color($font-color-theme2);
    font-weight: 600;
}
ol{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0.26rem;
}
ol li{
    width: 2rem;
    line-height: 0.64rem;
    @include bg_color($background-color-theme6);
    @include font_color($font-color-theme3);
    @include font-dpr($font_little_mid3);
    border-radius: 0.06rem;
    text-align: center;
    margin-bottom: 0.2rem;
}
.topBox{
    padding: 0.16rem 0;
}
.countryList{
    height: 60vh;
}
.custom-item{
    display: flex;
    border-bottom: 0.01rem solid $border-Color1;
}
.custom-item b{
    @include font_color($font-color-theme2);
    @include font-dpr($font_little_mid3);
    font-weight: bold;
    margin-right: 0.24rem;
}
.custom-item span{
    @include font_color($font-color-theme4);
    @include font-dpr($font_little_small1);
}
</style>
