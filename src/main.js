import Vue from 'vue'
import App from './app'
import toastRegistry from './toast/index'
//import App from './components/vv1.vue'
Vue.use(toastRegistry)
new Vue({
  el: '#app',
  render: h => h(App)
})
