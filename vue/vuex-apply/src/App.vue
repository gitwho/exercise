<template>
  <div id="app">
<!--     {{$store.state.name}}
    <br/>
    {{lesson}}
    <br/>
    getters： {{this.$store.getters.getNewname}},
    <br/>
    {{name}} + {{lesson}}
    <br/>

    {{this.$store.state.user.myName}}
    <br/>
    {{myName}}
    <br/>
    变名字： {{u}}
    <br/>
    mapGetters: {{getNewname}}
    <br/>
    子模块： {{getChildName}}
    <br/>
    子模块getters：{{this.$store.getters.getChildName}} 
    <br/>
 -->
    {{u}}
    <button @click="change">修改</button>
    
  </div>
</template>

<script>
// 如果页面中注入了store 每个实例上都会存在一个属性 $store

// 状态不受模块控制
// 如果增加子模块 namespace：false， 只有状态需要通过 模块.属性，（eg： {{this.$store.state.user.myName}}；其他：{{this.$store.getters.getChildName}}）
// 如果 namespace：true，就要使用 模块取属性， 其他：...mapGetters('user', ['getChildName'])

import {mapState, mapGetters, mapMutations} from 'vuex'
// console.log(mapState(['name', 'lesson'])); // 对象 key：value

// import {createNamespacedHelpers} from 'vuex'
// let {mapState} = createNamespacedHelpers('user')
// ...mapState(['myName'])

export default {
  computed: {
    lesson() {
      return this.$store.state.lesson
    },
    ...mapState(['name', 'lesson']),
    ...mapState('user', ['myName']), // 子模块user.js要加属性 namespaced: true,
    ...mapState('user', {u: (s) => s.myName}),
    ...mapGetters(['getNewname']),
    // ...mapGetters('user', ['getChildName'])
  },
  methods: {
    ...mapMutations('user', ['change_user']),
    change() {
      this['change_user']('jw')
    }
  }
}
</script>

<style>

</style>
