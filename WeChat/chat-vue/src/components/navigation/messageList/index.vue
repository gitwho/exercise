<template>
  <div class="messageList">
    <div class="listMessage" v-for="(item,index) in items">
      <div class="listItem" @click="clickChat(item.title,index)" :class="currentIndex===index?'actionIndex':''">
        <div>
          <img :src="item.img" alt="">
        </div>
        <div>
          <div>
            <span> {{item.title}}</span>
            <span class="msgTime">{{item.messageTime}}</span>
          </div>
          <div class="newMsg">
            hahahhah哈哈哈哈1111111111111111111111111111111111111111111111111111
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headImg from '../../../static/img/head/head.png'
  import {mapState,mapMutations } from 'vuex'
    export default {
      name: "messageList",
      data() {
        return {
          items:[],
          currentIndex:'',
        };
      },
      watch:{
        tabsActionOne:function(val){
          console.log(val)
          if(val==1){
            console.log(333333333333)
            this.clickChat(this.items[0].title,0)
            this.TABACTIONONE({
              num:0
            })
          }

          // this.editableTabsValue ='1'
        }
      },
      computed:{
        ...mapState(['messageList','tabsActionOne'])
      },
      created(){
        this.items = this.messageList
      },
      methods:{
        ...mapMutations(['HEADERNAME','TABACTIONONE']),
        clickChat(newname,index){
          this.currentIndex = index
          this.HEADERNAME({
            name:newname
          })
          this.$router.push('/chatMsg')
        }
      }
    }
</script>

<style scoped lang="less">
  .listMessage{
    .listItem{
      height: 40px;
      border-bottom: 1px solid gray;
      text-align: left;
      padding: 10px 15px;
      width: 270px;
      cursor: pointer;
      img{
        height: 40px;
        width: 40px;
      }
    }
  }
  .listItem>div{
    height: 40px;
    vertical-align: top;
    display: inline-block;
  }
  /*.listItem>div:nth-child(3){*/
    /*float: right;*/
  /*}*/
  .listItem>div:nth-child(2)>div{
    height: 20px;
    width:225px;
    line-height: 20px;
  }
  .listItem>div:nth-child(2)>div>span{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .listItem>div:nth-child(2)>div>span:nth-child(2){
   float: right;
    color: gray;
  }
  .listItem>div:nth-child(2)>div:nth-child(2){
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: gray;
  }
  .actionIndex{
    background-color: rgba(154, 180, 204, 0.34);
    .newMsg{
      color: #fff !important;
    }
    .msgTime{
      color: #fff !important;
    }

  }
</style>
