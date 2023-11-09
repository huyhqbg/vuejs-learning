import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepOne from '../views/StepOne.vue'
import StepTwo from '../views/StepTwo.vue'
import StepThree from '../views/StepThree.vue'
import StepFour from '../views/StepFour.vue'
import StepFive from '../views/StepFive.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/step-1',
      name: 'step1',
      component: StepOne
    },
    {
      path: '/step-2',
      name: 'step2',
      component: StepTwo
    },
    {
      path: '/step-3',
      name: 'step3',
      component: StepThree
    },
    {
      path: '/step-4',
      name: 'step4',
      component: StepFour
    },
    {
      path: '/step-5',
      name: 'step5',
      component: StepFive
    }
  ]
})

export default router
