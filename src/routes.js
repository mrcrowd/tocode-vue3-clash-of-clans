import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
import NotFoundPage from './pages/notFound.vue'
import Item from './pages/_itemAlias.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/404',
      component: NotFoundPage
    }
  ]
})

export default routers
