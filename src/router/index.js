import Vue from 'vue'
import Router from 'vue-router'
import NickCageRoom from '@/components/NickCageRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NickCageRoom',
      component: NickCageRoom
    }
  ]
})
