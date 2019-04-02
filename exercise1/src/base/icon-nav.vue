<template>
  <swiper ref="iconSwiper">
    <swiper-slide v-for="(page,index) in pages" :key="page.id">
      <div class="item-icon" v-for="item in page" :key="item.id">
        <img :src="item.iconSrc" alt="">
        <div>{{item.desc}}</div>
      </div>
    </swiper-slide>

  </swiper>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },

}
</script>
<style lang="stylus" scoped>
  .item-icon
    display flex
    align-items center
    flex-direction column
    width 25%
    float left
    font-size 14px
    padding  0 10px
    box-sizing  border-box
    img
      width 100%
    div
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      width 100%
      text-align center
</style>

