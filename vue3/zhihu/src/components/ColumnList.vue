<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card" h-100 shadow-sm>
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5>{{column.title}}</h5>
          <p>{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 将构造函数 断言成类型，用PropType
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})

</script>
