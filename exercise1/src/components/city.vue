<template>
  <div class="city">
    <div class="nav-tit">
      <i ></i>
      <div class="title">城市选择</div>
      <div class="search">
        <input type="text" placeholder="输入">
      </div>
    </div>
    <!-- 城市列表 -->
    <div>
      <!-- 当前城市 -->
      <div class="b-wrap">
        <div class="b-tit">当前城市</div>
        <div class="b-content">
          <span class="b-btn">北京</span>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="b-wrap">
        <div class="b-tit">热门城市</div>
        <div class="b-content">
          <span class="b-btn" v-for="hotCity in hotCities" :key="hotCity.id" >{{hotCity.name}}</span>
        </div>
      </div>
      <!-- 列表 -->
      <div class="cityList">
        <div class="c-wrap" v-for="(city, key) in cities" :key="key">
          <div class="c-tit">{{key}}</div>
          <div class="c-cont-wrap">
            <div class="c-cont" v-for="(item,index) in city" :key="index">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      cities: [],
      hotCities: [],
      InitialArr: []
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('./api/city')
      .then(res => {
        console.log(res.data.data)
        let data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      })
    },
    handle(cities) {
      this.InitialArr= Object.keys(cities);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-tit
    position relative
    background #fe3f30
    i
      position absolute
      left 10px
      top 5px
      height 30px
      width 10px
      background green
    .title
      color #ffffff
      font-size 18px
      width 100%
      height 40px
      line-height 40px
      text-align center
    .search
      text-align: center;
      padding-bottom: 5px;
      input
        width 90%
        border-radius 2px
        text-align center
        height 30px
  .b-wrap
    .b-tit
      color #999
      background #eee
      border-bottom 1px solid #ddd
      height 24px
      line-height 24px
      padding-left 10px
    .b-content
      padding 8px 8px
      .b-btn
        display inline-block
        width 100px
        height 24px
        line-height 24px
        border 1px solid #ddd
        border-radius 2px
        text-align center
        font-size 16px



</style>
