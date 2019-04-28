<template>
  <div id="app">
    <router-view/>
    <!--<div id="content">-->
      <!--<Navigation/>-->
      <!--<div id="vive">-->
        <!--<ComHeader/>-->
        <!--<router-view/>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  // import Navigation from '@/components/navigation'
  import ComHeader from '@/common/header'
  // import {login} from './api/api'
  import './index.css'
export default {
  name: 'App',
  data(){
    return{
      fullHeight:document.documentElement.clientHeight,
      timer:false
    }
  },
  components:{
    // Navigation,
    ComHeader
  },
  mounted(){
    // var formData = new FormData()
    // formData.append("ac",16999098007);
    // formData.append("pwd",'c123456');
    // login(formData).then(data=>{
    //   console.log(data)
    // })
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
  },
  watch:{
    fullHeight (val) {
      if(!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function (){
          console.log('5555')
          console.log(this.fullHeight)
          that.timer = false
        },400)
      }
    }
  },
  methods:{

  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   min-width: 1200px;
  /*margin-top: 60px;*/
  /*#content{*/
    /*margin: 0 auto;*/
    /*width: 1000px;*/
    /*!*background-color: red;*!*/
  /*}*/
  /*#vive{*/
    /*width: 700px;*/
    /*min-height: 800px;*/
    /*float: right;*/
    /*border-top-right-radius: 5px;*/
    /*border-bottom-right-radius: 5px;*/
    /*background-color: #eee;*/
  /*}*/
}
  /**{*/
    /*margin: 0;*/
  /*}*/
</style>
