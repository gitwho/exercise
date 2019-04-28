<template>
    <div class="navigation">
      <SetMessage/>
      <Search/>
      <Tabs/>
    </div>
</template>

<script>
  import SetMessage from './setMessage'
  import Search from './search'
  import Tabs from './tabs'
    export default {
      name: "navigation",
      components:{
        SetMessage,
        Search,
        Tabs
      }
    }
</script>

<style scoped lang="less">
  .navigation{
    width: 300px;
    min-height: 800px;
    background-color:#333333;
    color: #fff;
    float: left;
  }
</style>
