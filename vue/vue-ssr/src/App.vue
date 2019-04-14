<template>
  <div id="app">
    通天塔
    <br/>
    <router-link to="/">bar</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Bar from './components/Bar.vue'
// import Foo from './components/Foo.vue'
export default {
  components: {
    
  },
  metaInfo: {
    title: 'DefaultTitle'
  }
}
</script>