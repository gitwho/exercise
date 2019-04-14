<template>
  <div @click="show" class="red">
    barggj <br/>
    {{$store.state.username}}
  </div>
</template>

<script>
export default {
  // 写的代码 都是异步 采用promise
  // 规定只有 页面级组件 才能使用
  asyncData({store}) { // 异步数据 只在服务端执行 客户端运行不会执行
    return store.dispatch('set_username');
  },
  // 若从 前端链接 点击跳转则无法改变 state的 username值，所以 进入目标页面要mounted
  mounted() { 
    this.$store.dispatch('set_username');

    // 模拟平级传递事件
    setTimeout(() => {
      this.$bus.$emit('dinner', "晚上不吃饭")
    }, 2000);

    this.$bus.$on('dinner', (data) => {
        console.log(data)
      })
  },
  // 以上：服务端写一遍，前端也要写一遍
  // 看需求： 可用 create, 前后端都执行
  created(){
    console.log('created');
  },
  methods: {
    show() {
      alert(1)
    }
  }
}
</script>

<style scoped>
  .red{
    background: red
  }
</style>
