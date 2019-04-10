<template>
  <div @click="$emit('mousedown')">

    {{name}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {}
  }
}
</script>
