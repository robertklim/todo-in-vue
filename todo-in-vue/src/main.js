import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'  // cli: yarn add vee-validate
import router from './router' // cli: yarn add vue-router

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
