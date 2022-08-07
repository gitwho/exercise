<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <div>
      <form>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
          {{emailVal}}
        </div>
      </form>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'vvk'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test title',
    description: 'description',
    avatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/e8e568351435826b2f48c7c1f076ff41~300x300.image'
  },
  {
    id: 2,
    title: 'test title',
    description: 'description'
    // avatar: ''
  },
  {
    id: 3,
    title: 'test title',
    description: 'description',
    avatar: ''
  },
  {
    id: 4,
    title: 'test title',
    description: 'description',
    avatar: ''
  }
]
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    // ColumnList,
    ValidateInput
  },
  setup () {
    const emailVal = ref('gee')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确电子邮箱' }
    ]
    return {
      list: testData,
      currentUser,
      emailVal,
      emailRules
    }
  }
})
</script>

<style>

</style>
