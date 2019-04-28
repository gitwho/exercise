<template>
  <div class="home">
    <div id="content">
      <Navigation/>
      <div id="vive">
        <ComHeader/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/navigation'
  import ComHeader from '@/common/header'
  import {getAdress} from '@/api/api'
  export default {
    name: 'home',
    components:{
      Navigation,
      ComHeader
    },
    mounted(){
      // getMyMsg(localStorage.user).then(data=>{
      //   console.log(data)
      // }).then(err=>{
      //   console.log(err)
      // })
      getAdress(localStorage.user).then(data=>{
        // console.log(data)
      }).then(err=>{
        // console.log(err)
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
  #content{
    margin: 0 auto;
    width: 1000px;
    /*background-color: red;*/
  }
  #vive{
    width: 700px;
    min-height: 800px;
    float: right;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgba(215, 215, 215, 0.33);
  }
</style>
