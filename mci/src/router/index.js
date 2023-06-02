import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import case_info from '@/components/case_info.vue'
import Phospage from '../views/phospage.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/station',
      name: 'station',
      components: {
        default: () => import('@/views/station.vue'),
        case_info: case_info
      }
    },
    {
      path: '/patient',
      name: 'patient',
      components: {
        default: () => import('@/views/patient.vue'),
        case_info: case_info,
      },
      children: [
        {
          path: 'phospage',
          component: Phospage
        }
      ]
      // children: {
      //   path: '/pat_hospage',
      //   name: 'pat_hospage',
      //   component: {
      //     default: () => import('@/views/pat_hospage.vue'),
      //     case_info: case_info
      //   },
      //   pat_hospage
      // }
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})

export default router
