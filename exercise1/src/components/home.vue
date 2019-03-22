<template>
  <div>
    <div class="nav">
      <input class="search" type="text" placeholder="输入城市">
      <div class="location" @click="chooseCity">选择城市</div>
    </div>
    <swiper-nav></swiper-nav>
  </div>
</template>

<script>
import Location from '@/base/location'
import SwiperNav from '@/base/swiper-nav'


export default {
  data() {
    return {

    }
  },
  methods: {
    chooseCity() {
      this.$router.push('/city')
    }
  },
  components: {
    Location,
    SwiperNav
  }
}
</script>

<style lang="stylus" scoped>
.nav
  height 40px
  width 100%
  background-color #fded32
  display flex
  align-items center

  .search
    height 32px
    line-height 32px
    color #dddddd
    border-radius 5px
    margin-left 20px
    padding-left 10px
    width 250px
    font-family "微软雅黑"
    font-size 16px
  .location
    height 32px
    line-height 32px
    font-size 16px

</style>
