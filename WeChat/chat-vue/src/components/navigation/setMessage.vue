<template>
    <div class="set-message">
      <img src="@/static/img/head/head.png" alt="" v-popover:popover1>
      <span class="set-message_name">{{myMsg.nickname}}</span>
      <el-popover
        ref="popover1"
        placement="left"
        width="150"
        trigger="click">
        <div class="message_msg">
          <div class="message_img">
            <img src="@/static/img/head/head.png" alt="">
          </div>
          <div class="myMsg_tkwrap">
            <div>
              <span>昵称：</span><input @blur="upMyMsg()"  class="myMsg_tk" type="text" v-model="myMsg.nickname">
            </div>
            <div>
              <span>性别：</span>
              <input @blur="upMyMsg()" type="radio" id="one" value="1" v-model="myMsg.sex">
              <label for="1">男</label>
              <!--<label for="one">记住密码</label>-->
              <input @blur="upMyMsg()" type="radio" id="two" value="2" v-model="myMsg.sex">
              <label for="2">女</label>
              <!--<input class="forget" type="radio" value="1" v-model="myMsg.sex">-->
              <!--<label for="one">记住密码</label>-->
            </div>
            <div>
              <span>地址：</span><input @blur="upMyMsg()" class="myMsg_tk" type="text" v-model="myMsg.address">
            </div>
          </div>
        </div>
      </el-popover>
      <el-popover
        ref="popover2"
        placement="left"
        width="150"
        trigger="click">
       <div id="tkContent">
         <p>
           <span class="voice"></span><span>修改密码</span>
         </p>
         <p>
           <span class="voice"></span><span>关闭提示</span>
         </p>
         <p @click="toLogin()">
           <span class="cancel"></span><span>注销账号</span>
         </p>
         <!--<p>-->
           <!--<span class="voice"></span><span> 退出登录</span>-->
         <!--</p>-->
       </div>
      </el-popover>

      <div v-popover:popover2>
        <!--右侧图标-->
        <!--<div>-->
          <!--弹框选择-->
        <!--</div>-->
      </div>
    </div>
</template>

<script>
  import {getMyMsg,upMyMsg} from '@/api/api'
    export default {
        name: "set-message",
      data() {
        return {
          myMsg:{}
        };
      },
      mounted(){
        getMyMsg(localStorage.user).then(data=>{
          // console.log(data)
          if(data.code === 0){
            this.myMsg = data.data
          }
        }).then(err=>{
          console.log(err)
        })
      },
      methods:{
        toLogin(){
          this.$router.push('/login')
        },
        upMyMsg(){
          upMyMsg({
              account:localStorage.user,
              nickname:this.myMsg.nickname,
              sex:this.myMsg.sex,
              address:this.myMsg.address
            }).then(data=>{
            if(data.code === 0){
              console.log('修改成功！')
            }else{

            }
            console.log(data)
          }).then(err=>{
            console.log(err)
          })

        }
      }
    }
</script>

<style scoped lang="less">
  .set-message{
    text-align: left;
    height: 50px;
    line-height: 50px;
    padding:10px 15px;
    background-color: #333333;
    img{
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    div{
      display: inline-block;
      height: 26px;
      width: 25px;
      margin-top: 12px;
      vertical-align: top;
      float: right;
      background: url("../../static/img/icon/setUp.png") no-repeat;
      background-size: cover;
      cursor: pointer;
    }
    span{
      display: inline-block;
      height: 50px;
      vertical-align: top;
      margin-left: 5px;
      font-size: 18px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .set-message_name{
      width: 100px;
    }
  }
  #tkContent>p{
    /*background-color: red;*/
    margin: 15px 0;
    /*height: 20px;*/
    cursor: pointer;
  }
  #tkContent>p span{
    display: inline-block;
    height: 20px;
    /*width: 20px;*/
    line-height: 20px;
    vertical-align: top;
  }
  .voice{
    width: 20px;
    background: url("../../static/img/icon/voice.png") no-repeat;
    background-size: cover;
    /*background-color: #ff6600;*/
    margin:0 10px;
  }
  .cancel{
    width: 20px;
    background: url("../../static/img/icon/cancel.png") no-repeat;
    background-size: cover;
    /*background-color: #ff6600;*/
    margin:0 10px;
  }
  .message_msg{
    text-align: center;
    .message_img>img{
      width: 100px;
    }
  }
  .myMsg_tkwrap>div{
    width: 120px;
    margin: 8px 0;
    text-align: left;
  }
  .myMsg_tkwrap>div span{
    display: inline-block;
    width: 50px;
    text-align: left;
  }
  .myMsg_tk{
    /*display: inline-block;*/
    width: 70px;
    overflow: hidden;
    border: none;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: left;
  }
</style>
