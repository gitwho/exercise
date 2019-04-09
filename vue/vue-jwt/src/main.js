import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(router);
Vue.use(iView);

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  let isLogin = await store.dispatch('validate')

  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
