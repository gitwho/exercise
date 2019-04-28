<template>
    <div class="chatMsg">
      <!--这是chat页面-->
        <!--这个是威信网页版的实现方法，图片是动态添加img标签-->
          <!--<pre id="editArea" contenteditable-directive="" mm-paste="" class="flex edit_area ng-isolate-scope ng-valid ng-dirty"-->
           <!--contenteditable="true" ng-blur="editAreaBlur($event)"-->
           <!--ng-model="editAreaCtn" ng-click="editAreaClick($event)"-->
           <!--ng-keyup="editAreaKeyup($event)"-->
           <!--ng-keydown="editAreaKeydown($event)">-->
        <!--<img class="qqemoji qqemoji62" text="[猪头]_web"-->
             <!--src="/zh_CN/htmledition/v2/images/spacer.gif">-->
      <!--</pre>-->


      <MsgShow :msgShow="items"></MsgShow>
      <div class="chatFooter">
        <div class="chatMsg_icon">
          <span class="smile"></span><span class="file"></span>
        </div>
        <div class="chatMsg_testWrap">
          <p ref="writeMsg" class="chatMsg_test" contenteditable="true">
            {{newMsg}}
          </p>
        </div>
        <div class="chatMsg_sendWrap">
          <el-button class="chatMsg_send" size="medium" @click="sendMsg()" type="primary">发送</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import MsgShow from './msgShow'
    export default {
      name: "chatMsg",
      components:{
        MsgShow
      },
      data() {
        return {
          items:[
            {
              name:'小标兵1',
              isMy:false,
              messgae:'小标兵你好啊',
              messageTime:'7:00 AM'
            },
            {
              name:'小标兵2',
              isMy:false,
              messgae:'小标兵你好啊',
              messageTime:'7:00 AM'
            },
            {
              name:'小标兵',
              isMy:true,
              messgae:'小标兵你好啊',
              messageTime:'7:00 AM'
            },
            {
              name:'小标兵1',
              isMy:false,
              messgae:'小标兵你好啊',
              messageTime:'7:00 AM'
            },

          ],
          newMsg:''
        }
      },
      methods: {
        sendMsg(){
          this.items.push({
            name:'小标兵',
            isMy:true,
            messgae:this.$refs.writeMsg.innerHTML,
            messageTime:'7:00 AM'
          })
          this.$refs.writeMsg.innerHTML = ''
          console.log(this.$refs.writeMsg.innerHTML)
        }
      }
    }
</script>

<style scoped lang="less">
  .chatMsg{
    /*position: relative;*/
  }
  /*.chatMsg_receive>div{*/
    /*display: inline-block;*/
    /*vertical-align: top;*/
  /*}*/
  /*.chatMsg_receive{*/
    /*!*min-height: 100px;*!*/
    /*padding-top: 20px;*/
    /*!*background-color: red;*!*/
    /*text-align: left;*/
    /*.chatMsg_headWrap{*/
      /*height: 50px;*/
      /*width: 50px;*/
      /*margin: 0 10px;*/
      /*border-radius: 5px;*/
      /*overflow:hidden;*/
      /*img{*/
        /*width: 100%;*/
        /*height: 100%;*/
      /*}*/
    /*}*/
    /*.chatMsg_msgShow{*/
      /*!*min-height: 30px;*!*/
      /*!*min-width: 100px;*!*/
      /*padding: 10px 30px;*/
      /*background-color: #fff;*/
      /*border-radius: 5px;*/
      /*margin-top: 5px;*/
      /*position: relative;*/
      /*.chatMsg_triangle{*/
        /*display: inline-block;*/
        /*position: absolute;*/
        /*left: -14px;*/
        /*top: 10px;*/
        /*!*height: 20px;*!*/
        /*!*width: 20px;*!*/
        /*!*background-color: red;*!*/
        /*border-right: 7px solid #fff;*/
        /*border-top: 7px solid transparent;*/
        /*border-bottom: 7px solid transparent;*/
        /*border-left: 7px solid transparent;*/
      /*}*/
    /*}*/
  /*}*/

  .chatFooter{
    width: 700px;
    height: 150px;
    position: fixed;
    bottom:0;
    border-top: 1px solid #d6d6d6;
    .chatMsg_icon{
      height: 25px;
      line-height: 25px;
      padding: 5px 0;
      /*background-color: red;*/
      text-align: left;
      .smile{
        display: inline-block;
        height: 25px;
        width: 25px;
        background: url("../../static/img/icon/smile.png") no-repeat;
        background-size: cover;
        margin: 0 10px 0 20px;
      }
      .file{
        display: inline-block;
        height: 25px;
        width: 25px;
        margin: 0 10px;
        background: url("../../static/img/icon/file.png") no-repeat;
        background-size: cover;
      }
    }
    .chatMsg_testWrap{
      height: 70px;
      overflow:auto;
      padding: 0 20px;
      /*background-color: red;*/
      .chatMsg_test{
        height:100%;
        text-align: left;
        outline: none;
        font-size: 14px;
      }
    }
    .chatMsg_sendWrap{
      text-align: right;
      .chatMsg_send{
        margin-right: 30px;
      }
    }
  }

</style>
