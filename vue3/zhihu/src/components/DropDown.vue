<template>
  <div class="dropDown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <!-- <li><a class="dropdown-item" href="#">新建文章</a></li>
      <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
      <drop-down-item><a class="dropdown-item" href="#">新建文章</a></drop-down-item>
      <drop-down-item disabled><a class="dropdown-item" href="#">编辑资料</a></drop-down-item>
      <drop-down-item><a class="dropdown-item" href="#">退出登录</a></drop-down-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import DropDownItem from './DropDownItem.vue'
import useClickOutside from '@/hooks/usClickOutside'

export default defineComponent({
  components: { DropDownItem },
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }

})
</script>
