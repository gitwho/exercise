<template>
  <div class="wrapper" ref="slider">
    <ul class="content" ref="contentGroup">
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
      this.setContentWidth()
      this.initSwiper()
    })
  },
  methods: {
    initSwiper() {
      let scroll = new BScroll('.wrapper', {
        scrollY: false,
        scrollX: true,
        snap: {
          loop: true,
          // threshold: 0.3,
          speed: 400
        },
      })
    },
    setContentWidth() {
      let children = this.$refs.contentGroup.children;
      let width = 0
      let contentWidth = width + this.$refs.wrapper.clientWidth
      for(let i=0; i<children.length; i++){
        let child = this.children[i]
        // addClass(child, 'slider-item')
        child.style.width = contentWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * contentWidth
      }
      this.$refs.contentWidth.style.width = width + 'px'
    }
  },
  components: {
    BScroll
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 100px
    overflow hidden
    .item
      float left
      img
        width: 100%
</style>
