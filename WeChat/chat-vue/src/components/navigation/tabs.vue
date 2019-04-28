<template>
  <div class="tabs">
    <div class="tabsCont">
      <el-tabs type="border-card"  @tab-click="handleClick" v-model="editableTabsValue">
        <el-tab-pane name="1">
          <span slot="label"><img class="iconImg" :src="messageImg" alt=""> </span>
          <messageList/>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label"><img class="iconImg" :src="group" alt=""> </span>
          <FriendList :listDatas="groupItems" moudelType="group" />
        </el-tab-pane>
        <el-tab-pane name="3">
        <span slot="label"><img class="iconImg" :src="Contacts" alt=""> </span>
          <div class="friendTitle">新的朋友</div>
          <div class="adress_newFriend">
            <img src="../../static/img/icon/addFriend.png" alt=""><span>新的朋友</span>
          </div>
          <div class="friendTitle">好友</div>
        <FriendList :listDatas="FriendItems" moudelType="friend" />
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>

<script>
  import headImg from '../../static/img/head/head.png'
  import Message from '../../static/img/icon/message.png'
  import MessageAction from '../../static/img/icon/messageActive.png'
  import group from '../../static/img/icon/contacts.png'
  import groupAction from '../../static/img/icon/contactsActive.png'
  import Contacts from '../../static/img/icon/address.png'
  import ContactsAction from '../../static/img/icon/addressAction.png'
  import messageList from '@/components/navigation/messageList'
  import FriendList from '@/components/navigation/friendList'
  import { mapState,mapMutations } from 'vuex'
    export default {
      name: "tabs",
      components:{
        messageList,
        FriendList
      },
      data() {
        return {
          editableTabsValue:'1',
          messageImg:MessageAction,
          Contacts:Contacts,
          group:group,
          // activeName2: 'first',
          groupItems: [
            {
              img: headImg,
              title:'华云内部群1',
              messageTime:'7:00AM',
              name: '华云研发群1',
              remarks:'华云内部群1',
              autograph:'个人签名1',
              area:'河南信阳',
              nums:56,
            },
            {
              img: headImg,
              title:'华云内部群2',
              messageTime:'7:00AM',
              name: '华云研发群2',
              remarks:'华云内部群2',
              autograph:'个人签名2',
              nums:56,
              area:'河南信阳'
            },
            {
              img: headImg,
              title:'华云内部群3',
              messageTime:'7:00AM',
              name: '华云研发群3',
              remarks:'华云内部群3',
              autograph:'个人签名3',
              area:'河南信阳',
              nums:56,
            },
            {
              img: headImg,
              title:'华云内部群4',
              messageTime:'7:00AM',
              name: '华云研发群4',
              remarks:'华云内部群4',
              autograph:'个人签名4',
              area:'河南信阳',
              nums:56,
            },
            {
              img: headImg,
              title:'华云内部群5',
              messageTime:'7:00AM',
              name: '华云研发群5',
              remarks:'华云内部群5',
              autograph:'个人签名5',
              area:'河南信阳',
              nums:56,
            },
          ],
          FriendItems: [
            {
              img: headImg,
              name: '小标兵1',
              remarks:'朋友1',
              autograph:'个人签名1',
              area:'河南信阳',
            },
            {
              img: headImg,
              name: '小标兵2',
              remarks:'朋友2',
              autograph:'个人签名2',
              area:'河南信阳'
            },
            {
              img: headImg,
              name: '小标兵3',
              remarks:'朋友3',
              autograph:'个人签名3',
              area:'河南信阳',
            },
            {
              img: headImg,
              name: '小标兵4',
              remarks:'朋友4',
              autograph:'个人签名4',
              area:'河南信阳',
            },
            {
              img: headImg,
              name: '小标兵5',
              remarks:'朋友5',
              autograph:'个人签名5',
              area:'河南信阳',
            },
          ],
        };
      },
      watch:{
        tabsActionOne:function(val){
          if(val==1){
            console.log(222222222222222)
            this.editableTabsValue ='1'
            this.handleClick({index:'0'})
          }

        }
      },
      computed:{
        ...mapState(['tabsActionOne'])
      },
      methods: {
        ...mapMutations([
          'HEADERNAME'
        ]),
        handleClick(tab, event) {
          console.log(tab);
          let index = tab.index;
          switch (index){
            case '0' :
              this.Contacts = Contacts
              this.group = group
              this.messageImg = MessageAction
              //不使用辅助函数的用法
              // this.$store.commit('HEADERNAME',{
              //   name:'消息'
              // })

              //使用辅助函数的用法
              this.HEADERNAME({
                name:'消息'
              })
              this.$router.push('/chatMsg');
              break
            case '1' :
              this.messageImg = Message
              this.Contacts = Contacts
              this.group = groupAction
              this.HEADERNAME({
                name:'群组'
              })
              this.$router.push('/groupDetails');
              break
            case '2' :
              this.messageImg = Message
              this.group = group
              this.Contacts = ContactsAction
              this.HEADERNAME({
                name:'联系人'
              })
              this.$router.push('/detailedMsg');
              break
          }
        },


      }
    }
</script>

<style scoped lang="less">
  .tabs{
    /*padding:10px 15px;*/
    background-color: #333333;
    /*width: 270px;*/
  }
  .tabsCont{
    width: 300px;
    overflow: hidden;
    border: 1px solid #fff;
  }
  .chat{
    display: inline-block;
    height: 25px;
    width: 25px;
    margin: 2.5px;
    background: url("../../static/img/icon/search.png") no-repeat;
    background-size: cover;
  }
  .iconImg{
    height: 30px;
    vertical-align: top;
  }
  .adress_newFriend{
    width:270px;
    height: 40px;
    padding: 5px 15px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    /*margin: 15px 0;*/
    /*margin-bottom: 20px;*/
    border-bottom: 1px solid gray;
    img{
      height:40px;
      width: 40px;
    }
    span{
      display: inline-block;
      vertical-align: top;
      height: 40px;
      line-height: 40px;
      margin-left: 10px;
    }
  }
  .friendTitle{
    color: gray;
    text-align: left;
    margin:20px 0 5px 15px;
  }
  /*el-tabs{*/
    /*width: 100% !important;*/
  /*}*/
</style>
