<template>
  <div class="login">
    
    <Input type="text" v-model="username" placeholder="请输入" style="width: 300px"/>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
// import {login} from '../api/user.js'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    ...mapActions(['toLogin']),
    login() {
      this.toLogin(this.username)
      // this['toLogin'](this.username)
      .then(data => {
        this.$router.push('/')
      }, err => {
        // this.$Message.error(err)
        console.log('err')
      })

    }
  }
}
</script>