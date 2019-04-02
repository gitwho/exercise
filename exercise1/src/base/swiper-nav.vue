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
      
    })
  },
  methods: {

    setContentWidth() {
      let children = this.$refs.contentGroup.children;
      console.log(children)
      let width = 0
      let contentWidth = width + this.$refs.slider.clientWidth
      for(let i=0; i<children.length; i++){
        let child = children[i]
        // addClass(child, 'slider-item')
        child.style.width = contentWidth + 'px'
        width += contentWidth
      }
      if (this.loop) {
        width += 2 * contentWidth
      }
      this.$refs.contentGroup.style.width = width + 'px'

      this.$nextTick(()=>{
        if(!this.picScroll){
          this.picScroll = new BScroll(this.$refs.slider,{
            scrollX:true,
            eventPassthrough:'vertical', //忽略竖直方向的滚动
            snap: {
              loop: true,
            }
          });
        }else{
          this.picScroll.refresh();
        }
      })
    }
  },
  components: {
    BScroll
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    .content
      height: 100px
      overflow hidden
      .item
        float left
        img
          width: 100%
</style>
