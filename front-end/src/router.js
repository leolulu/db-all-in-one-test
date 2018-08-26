import Vue from 'vue'
import Router from 'vue-router'

import page1 from './components/comp1.vue'
import page2 from './components/comp2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
  ]
})
