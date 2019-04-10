<template>
  <div>
    <bar></bar>
    <foo></foo>
    123
  </div>
</template>

<script>
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
export default {
  components: {
    Bar,
    Foo
  }
}
</script>