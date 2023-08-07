import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import PassengerLayoutView from '@/views/event/PassengerLayoutView.vue'
import PassengerDetailView from '@/views/event/PassengerDetailView.vue'
import AirlineDetailView from '@/views/event/AirlineDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list',
      component: HomeView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1'), size: parseInt(route.query?.size as string || '2')})
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
      props: true
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    },
    {
      path: '/passenger/:id-:airlineId',
      name: 'passenger-layout',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView,
          props: true
        },
        {
          path: 'airDetail',
          name: 'airline-detail',
          component: AirlineDetailView,
          props: true
        }
      ]
    }
  ]
})

export default router
