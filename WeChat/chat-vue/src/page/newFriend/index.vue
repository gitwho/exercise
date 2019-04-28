<template>
    <div>
      <div>
        <div class="new_search">
          <span class="new_search_img"></span>
          <input type="text" placeholder="请输入联系人手机号">
        </div>
        <el-button class="new_searchGet" type="primary" @click="search()">查找</el-button>
      </div>

      <div>

      </div>
    </div>
</template>

<script>
  import {addAdress} from '@/api/api'
    export default {
     name: "index",
      methods:{
        search(){
          addAdress({
            "ac":13276909563,
            "bo":13276909562
          }).then(data=>{
            console.log(data)
          }).then(err=>{
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .new_search{
    height: 40px;
    line-height: 40px;
    width: 300px;
    display: inline-block;
    border-radius: 5px;
    border: 1px solid gray;
    margin-top: 60px;
    background-color: #fff;
    .new_search_img{
      display: inline-block;
      height: 25px;
      width: 25px;
      vertical-align: top;
      margin-top: 7.5px;
      /*margin: 5px;*/
      background: url("../../static/img/icon/search.png") no-repeat;
      background-size: cover;
    }
    /*background-color: lightskyblue;*/
    input{
      height: 30px;
      width: 250px;
      font-size: 14px;
      border: none;

      /*border-radius: 5px;*/
    }
  }
</style>
