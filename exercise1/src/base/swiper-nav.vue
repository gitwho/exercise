<template>
  <div class="wrapper">
    <ul class="content">
      <li class="item"><img src="http://img1.qunarzz.com/piao/fusion/1810/5d/b63d846958a4702.jpg_750x200_8129cfc3.jpg" alt=""></li>
      <li class="item"><img src="http://img1.qunarzz.com/piao/fusion/1810/5d/b63d846958a4702.jpg_750x200_8129cfc3.jpg" alt=""></li>
      <li class="item"><img src="http://img1.qunarzz.com/piao/fusion/1810/5d/b63d846958a4702.jpg_750x200_8129cfc3.jpg" alt=""></li>
      <li class="item"><img src="http://img1.qunarzz.com/piao/fusion/1810/5d/b63d846958a4702.jpg_750x200_8129cfc3.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  data() {
    return {

    }
  },
  props: {
    swiperList: {
      type: Array,
      default: [],
    }
  },
  mounted() {
    this.$nextTick(function(){
      let scroll = new BScroll('.wrapper', {
        scrollY: false,
        scrollX: true
      })
    })
  },
  methods: {

  },
  components: {
    BScroll
  }
}
</script>

<style lang="stylus" scoped>

</style>
