<template>
  <div class="comHeader">
    {{this.headerName}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      name: "comHeader",
      computed:{
        ...mapState([
          'headerName'
        ])
      }
    }
</script>

<style scoped lang="less">
  .comHeader{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #c0c4cc;
  }
</style>
