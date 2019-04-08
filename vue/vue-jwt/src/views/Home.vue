<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import {getUser} from '../api/user.js'

export default {
  name: 'home',
  components: {
    
  },
  async mounted() {
    let o = await getUser();
    console.log(o)
  },
  methods: {
    
  }
}
</script>
