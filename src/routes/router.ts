import { createRouter, createWebHistory } from 'vue-router'

import SheetList from '../components/SheetList/SheetList.vue'
import SheetMain from '../components/Sheet/SheetMain.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/list',
      component: SheetList
    },{
      name : 'New',
      path: '/new/:id',
      component: SheetMain
    },
  ]
})
