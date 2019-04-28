<template>
  <div >
    <div class="groupMsg"  v-if="Object.keys(groupMsg).length">
      <div class="group_listImg">
        <!--<div class="group_add">-->
        <!--＋-->
        <!--</div>-->
        <div class="group_personnel" v-for="(item,index) in msgList">
          <div class="group_ImgContainer">
            <img class="group_img" :src="item.img" alt="">
          </div>
          <div>
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="group_more"><span>查看更多群成员</span><span class="group_msgDown"></span></div>
      <div class="group_operationChange">
        <p class="group_operation">
          <span class="group_operationTitle">群详情介绍：</span>
          <span class="group_operationCont">本群创建于2019年4月16日</span>
        </p>
        <p class="group_operation">
          <span class="group_operationTitle">群消息提醒：</span>
          <!--<select class="group_operationCont" name="" id="">-->
          <!--<option value="">接收消息并提示</option>-->
          <!--<option value="">接收想消息但不提示</option>-->
          <!--<option value="">屏蔽群消息</option>-->
          <!--</select>-->
          <el-select class="group_operationCont" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in group_operationMsg"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p class="group_operation">
          <span class="group_operationTitle">我的群名片：</span>
          <span class="group_operationCont">小标兵</span>
        </p>
      </div>
      <div>
        <el-button size="medium" type="success" class="group_sendMsg" @click="groupSend()">发消息</el-button>
        <el-button size="medium" type="danger" class="group_quit">退出群</el-button>
      </div>

    </div>
    <div  v-if="Object.keys(groupMsg).length<1">
      没有选中群组
    </div>
  </div>

</template>

<script>
  import headImg from '../../static/img/head/head.png'
  import { mapState,mapMutations,createNamespacedHelpers } from 'vuex'
  const {mapState:mapStateGroupMsg} = createNamespacedHelpers('groupMsg')
    export default {
      name: "groupMsg",
      data(){
          return{
            msgList:[
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
              {
                name:'用户1',
                img:headImg
              },
            ],
            group_operationMsg:[
              {
                value: '选项1',
                label: '接收消息并提示'
              },
              {
                value: '选项2',
                label: '接收想消息但不提示'
              },
              {
                value: '选项3',
                label: '屏蔽群消息'
              },
            ],
            value: '接收消息并提示'
          }
      },
      computed:{
        ...mapState(['messageList','tabsActionOne']),
        ...mapStateGroupMsg(['groupMsg'])
       },
      methods:{
        ...mapMutations(['TABACTIONONE']),
        groupSend(){
          console.log(this.groupMsg)
          console.log(this.messageList)
          this.messageList.unshift(this.groupMsg)
          this.TABACTIONONE({
            num:1
          })
          this.$router.push('/chatMsg')
        }
      }
    }
</script>

<style scoped lang="less">
  .group_listImg{
    /*height: 300px;*/
    /*border-bottom: 1px solid red;*/
    padding: 20px 0;
    text-align: left;
    .group_personnel{
      height: 90px;
      width: 70px;
      text-align: center;
      display: inline-block;
      cursor: pointer;
    }
    .group_ImgContainer{
      height: 70px;
      line-height: 70px;
      vertical-align: middle;
      .group_img{
        height: 50px;
        width: 50px;
        vertical-align: middle;
      }
    }
    /*.group_add{*/
      /*display: inline-block;*/
      /*height: 50px;*/
      /*width: 50px;*/
      /*line-height: 50px;*/
      /*text-align: center;*/
      /*font-size: 50px;*/
      /*vertical-align: top;*/
      /*margin: 10px;*/
      /*border: 1px solid gray;*/
      /*cursor: pointer;*/
    /*}*/
  }
  .group_more{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    cursor: pointer;
    background-color: rgba(176, 176, 176, 0.33);
    .group_msgDown{
      display: inline-block;
      height: 20px;
      width: 20px;
      margin-top: 10px;
      vertical-align: top;
      background: url("../../static/img/icon/down.png") no-repeat;
      background-size: cover;
    }
  }
  .group_operationChange{
    width: 100%;
    /*text-align: center;*/
    .group_operation{
      width: 450px;
      height: 40px;
      margin: 10px auto;
      /*background-color: red;*/
      .group_operationTitle{
        /*display: inline-block;*/
        width: 170px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin-right: 30px;
        /*background-color: gray;*/
        float: left;
        text-align: right;
      }
      .group_operationCont{
        float: left;
        width: 250px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: left;
        /*background-color: lime;*/
      }
    }
  }
  .group_sendMsg{
    margin-right: 70px;
  }
  .group_quit{
    margin-right: 40px;
  }

</style>
