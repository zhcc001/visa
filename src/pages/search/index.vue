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
            <li>加拿大</li>
            <li>菲律宾</li>
            <li>新加坡</li>
        </ol>
    </div>
    <div class="hotCountry">
        <h6>热门国家</h6>
        <ol>
            <li>韩国</li>
            <li>法国</li>
            <li>泰国</li>
            <li>日本</li>
            <li>加拿大</li>
            <li>菲律宾</li>
        </ol>
    </div>
    <div class="countryList">
        <h6>国家名称</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../common/sass/commonStyle.scss';
.searchHistory,.hotCountry,.countryList{
  width: 94%;
  margin: 0 auto;
  padding-bottom: 0.3rem;
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
    border-radius: 0.07rem;
    text-align: center;
    margin-bottom: 0.2rem;
}
</style>
