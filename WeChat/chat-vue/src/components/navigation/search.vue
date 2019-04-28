<template>
    <div class="search">
      <div>
        <span></span>
        <input type="text" placeholder="搜索">
      </div>

    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="less">
  .search{
    /*width: 100%;*/

    padding:10px 15px;
    background-color: #333333;
    font-size: 0;
    div{
      height: 30px;
      border-radius: 5px;
      text-align: left;
      background-color: rgb(12, 12, 12);
      span{
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 5px;
        background: url("../../static/img/icon/search.png") no-repeat;
        background-size: cover;
      }
      input{
        background-color: rgba(12, 12, 12, 0.9);
        width: 235px;
        height: 30px;
        vertical-align: top;
        border: none;
        color: #fff;
      }
    }
  }
</style>
