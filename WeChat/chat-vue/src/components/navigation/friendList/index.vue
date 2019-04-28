<template>
    <div class="friendList">
        <div class="listContent" v-for="(item,index) in items">
            <p @click="friendMessage(item,index)" :class="currentIndex === index?'actionIndex':''">
              <img :src="item.img" alt=""><span>{{item.remarks}}</span><span v-if="item.nums">({{item.nums}})</span>
            </p>
        </div>
    </div>
</template>

<script>
  import headImg from '../../../static/img/head/head.png'
  import { mapMutations,createNamespacedHelpers } from 'vuex'
  const {mapMutations:mapMutationsDetaile} = createNamespacedHelpers('detailedMsg')
  const {mapMutations:mapMUtationsGroupMsg} = createNamespacedHelpers('groupMsg')
    export default {
      name: "friendList",
      props:['listDatas','moudelType'],
      data() {
        return {
          items:this.listDatas,
          currentIndex:''
        };
      },
      created(){
        console.log('哈哈哈哈')
      },
      mounted(){
        console.log('=========')
        console.log(this.listDatas)
      },
      methods:{
        ...mapMutations(['HEADERNAME']),
        ...mapMutationsDetaile(['DETAILEDUPDATA']),
        ...mapMUtationsGroupMsg(['GROUPMSG']),
        friendMessage(item,index){
          if(this.moudelType ==='group'){
            console.log(item)
            this.currentIndex = index
            this.HEADERNAME({
              name:'群组详情'
            });
            this.GROUPMSG({
              msg:item
            });
            this.$router.push('/groupDetails');
          }else{
            this.currentIndex = index

            this.HEADERNAME({
              name:'详细信息'
            });
            this.DETAILEDUPDATA({
              msg:item
            });
            this.$router.push('/detailedMsg');
          }

        }
      }
    }
</script>

<style scoped lang="less">
  .listContent>p{
    width:270px;
    height: 40px;
    padding: 5px 15px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid rgba(165, 165, 165, 0.48);
  }
  .listContent>p>img{
    height: 40px;
    width: 40px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .actionIndex{
    background-color: rgba(154, 180, 204, 0.34);
  }

</style>
