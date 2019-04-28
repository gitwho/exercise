<template>
  <div>
    <div class="detailedMsg" v-if="Object.keys(detailed).length">
      <p>
        <img :scr="detailed.img"></img>
      </p>
      <p><span>名称</span><span>{{detailed.name}}</span></p>
      <p><span>签名</span><span>{{detailed.autograph}}</span></p>
      <p><span>备注</span><span>{{detailed.remarks}}</span></p>
      <p><span>地区</span><span>{{detailed.area}}</span></p>
      <p><button class="commitMsg" @click="commitMsg()">发送消息</button></p>
    </div>
    <div  v-if="Object.keys(detailed).length<1">
      没有选中联系人
    </div>
  </div>

</template>

<script>
  import { mapMutations,createNamespacedHelpers } from 'vuex'
  const {mapState:mapStateDetaile} = createNamespacedHelpers('detailedMsg')
    export default {
      name: "detailedMsg",
      computed:{
        ...mapStateDetaile([
          'detailed'
        ])
      },
      methods:{
        ...mapMutations(['HEADERNAME']),
        commitMsg(){
          this.HEADERNAME({
            name:this.detailed.name
          })
          this.$router.push('/chatMsg')
        }

      }
    }
</script>

<style scoped>
  .detailedMsg>p{
    margin: 10px 0;
  }
  .detailedMsg>p:nth-child(1)>img{
    height: 150px;
    width: 150px;
  }
  .detailedMsg>p>span:nth-child(1){
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    font-weight: bold;
    color: black;
    display: inline-block;
    margin-right: 20px;
    /*height: 100px;*/
    /*width: 100px;*/
  }
  .detailedMsg>p>span:nth-child(2){
    display: inline-block;
    width:100px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    /*background-color: red;*/
    /*font-size: 16px;*/
    /*font-weight: bold;*/
    /*color: black;*/
    /*height: 100px;*/
    /*width: 100px;*/
  }
  .commitMsg{
    width: 250px;
    height: 35px;
    line-height: 35px;
    background-color: lime;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
  }
</style>
