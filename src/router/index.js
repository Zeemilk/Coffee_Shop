import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/amazon',
      name: 'amazon',
      component: () => import('../views/AmazonView.vue')
    },
    {
      path: '/choidoi',
      name: 'choidoi',
      component: () => import('../views/ChoidoiView.vue')
    },
    {
      path: '/starbuck',
      name: 'starbuck',
      component: () => import('../views/StarbuckView.vue')
    },
    {
      path: '/reddiamond',
      name: 'reddiamond',
      component: () => import('../views/ReddiamondView.vue')
    },
    {
      path: '/inthanin',
      name: 'inthanin',
      component: () => import('../views/InthaninView.vue')
    },
    {
      path: '/bluecup',
      name: 'bluecup',
      component: () => import('../views/BluecupView.vue')
    }
  ]
})

export default router
