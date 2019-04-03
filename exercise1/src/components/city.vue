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
    <div class="cityWrap" ref="citySlider">
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
          <div class="c-wrap" v-for="(city, key) in cities" :key="key" :ref="key">
            <div class="c-tit">{{key}}</div>
            <div class="c-cont-wrap">
              <span class="c-cont" v-for="(item,index) in city" :key="index"
                @click="selectCity"
              >{{item.name}}</span>

            </div>
          </div>
        </div>
      </div>
      <!-- 导航字母 -->
      <div class="alphabet">
        <ul>
          <li class="al-item" v-for="(al,index) in InitialArr" :key="index"
            @click="toCity"
          >{{al}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      cities: [],
      hotCities: [],
      InitialArr: [],
      chooseCity: ''
    }
  },
  mounted() {
    this.getCityInfo()
    this.initScroll()
  },
  methods: {
    ...mapMutations(['changeCity']),
    getCityInfo() {
      axios.get('./api/city')
      .then(res => {
        console.log(res.data.data)
        let data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
        this.handle(this.cities)
      })
    },
    handle(cities) {
      this.InitialArr= Object.keys(cities);
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.citySlider, {
        click: true,
        // mouseWheel: true,
        // tap: true
      })
    },
    toCity(e) {
      console.log(e);
      let initial = e.target.innerHTML;
      let el = this.$refs[initial][0];
      this.scroll.scrollToElement(el, 500)
    },

    selectCity(e) {
      console.log(e.target.innerHTML)
      this.chooseCity = e.target.innerHTML;
      // 更改 state
      this.changeCity(this.chooseCity)
      this.$router.push('/')
    },

  }
}
</script>

<style lang="stylus" scoped>
  .city
    position relative
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
    .cityWrap
      height 592px
      overflow scroll
      position relative
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
      .cityList
        .c-wrap
          color #999
          .c-tit
            background #eee
            border-bottom 1px solid #ddd
            height 24px
            line-height 24px
            padding-left 10px
          .c-cont-wrap
            .c-cont
              color #666
              padding-left 10px
              height 24px
              display block
              line-height 24px
              font-size 16px
              border-bottom 1px solid #ddd
      .alphabet
        position absolute
        top 50%
        right 5px
        transform translate(0,-50%)
        width 12px
        text-align center
        z-index 10
        .al-item
          font-size 14px
          color red
          height 20px

</style>
