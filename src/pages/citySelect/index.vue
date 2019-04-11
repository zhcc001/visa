<template>
  <div class="citySelect">
    <div class="currentCity">
      <h6>当前定位城市</h6>
      <div class="cityText">
        <img src="./dingweiweizhi.png" alt="">
        <span>上海</span>
      </div>
    </div>
    <div class="list">
      <h6>选择城市</h6>
    <cube-index-list :data="cityData" @select="selectItem" >
      <cube-index-list-group v-for="(group, index) in cityData" :key="index" :group="group">
          <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item">
          <div class="custom-item">{{item.name}}</div>
          </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'citySelect',
   data() {
    return {
      title: 'Current City: BEIJING',
      cityData :[
        {
          "name": "A",
          "items": [
            {
              "name": "A上海",
              "value": 3
            },
            {
              "name": "A北京",
              "value": 4
            }]
        }]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../../common/sass/mixin.scss";
@import "../../common/sass/variable.scss";
h6{
  @include font-dpr($font_little_small);
  @include font_color($font-color-theme4);
  padding-left: 0.3rem;
  padding-top: 0.38rem;
}
.cityText{
  width: 100%;
  @include bg_color($background-color-theme0);
  padding: 0.36rem 0;
  display: flex;
  margin-top: 0.36rem;
  img{
    width: 0.28rem;
    height: 0.34rem;
    padding: 0 0.12rem 0 0.3rem;
  }
  span{
    @include font-dpr($font_little_mid2);
    @include font_color($font-color-theme7);
  }
}
</style>
