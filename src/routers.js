import Vue from 'vue';
import Router from 'vue-router';

import home from './components/home.vue'
import tao from './components/tao.vue'
import solt from './components/solt.vue'
import group from './components/transition-group.vue'
Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    children: [{
      path: 'name',
      name: 'tao',
      component: tao,
      children: [{
        path: 'solt',
        name : 'solt',
        component : solt
      },{
        path: 'transition-group',
        name : 'group',
        component : group
      }
      ]
    }]
  }]
})
export default router;
