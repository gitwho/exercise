<template>
  <div class="msgShow">
    <div :class="item.isMy?'chatMsg_receiveRight':'chatMsg_receive'" v-for="item in msgShow">
      <div class="chatMsg_headWrap">
        <img src="../../../static/img/head/head.png" alt="">
      </div>
      <div>
        <div>
          <span>{{item.name}}</span>
        </div>
        <div class="chatMsg_msgShow">
          <span class="chatMsg_triangle"></span>
          <div>
            {{item.messgae}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "msgShow",
      props:['msgShow'],
      data() {
        return {

        }
      },
    }
</script>

<style scoped lang="less">

  .chatMsg_receive>div, .chatMsg_receiveRight>div{
    display: inline-block;
    vertical-align: top;
  }
  .chatMsg_receive{
    padding-top: 20px;
    text-align: left;
    .chatMsg_headWrap{
      height: 50px;
      width: 50px;
      margin: 0 10px;
      border-radius: 5px;
      overflow:hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .chatMsg_msgShow{
      /*min-height: 30px;*/
      /*min-width: 100px;*/
      padding: 10px 30px;
      background-color: #fff;
      border-radius: 5px;
      margin-top: 5px;
      position: relative;
      .chatMsg_triangle{
        display: inline-block;
        position: absolute;
        left: -14px;
        top: 10px;
        /*height: 20px;*/
        /*width: 20px;*/
        /*background-color: red;*/
        border-right: 7px solid #fff;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid transparent;
      }
    }
  }
  .chatMsg_receiveRight{
    padding-top: 20px;
    text-align: right;
    display: flex;
    flex-direction: row-reverse;

    .chatMsg_headWrap{
      height: 50px;
      width: 50px;
      margin: 0 10px;
      border-radius: 5px;
      overflow:hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .chatMsg_msgShow{
      padding: 10px 30px;
      background-color: #fff;
      border-radius: 5px;
      margin-top: 5px;
      position: relative;
      .chatMsg_triangle{
        display: inline-block;
        position: absolute;
        right: -14px;
        top: 10px;
        border-right: 7px solid transparent;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid #fff;
      }
    }
  }
  .chatMsg_receiveRight:after{
    content: '';display: block;clear: both;
  }
</style>
