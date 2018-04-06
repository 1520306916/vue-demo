import Vue from 'vue';
import app from './App.vue';
import router from './routers';
import store from './vuex/store'
import axios from 'axios';
import _ from 'lodash';

Vue.prototype.$ajax = axios;
Vue.prototype.$goRouter = function(index) {
  this.$router.push(index)
}
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h=>h(app),
})
