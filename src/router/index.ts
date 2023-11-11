import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepOne from '../views/StepOne.vue'
import StepTwo from '../views/StepTwo.vue'
import StepThree from '../views/StepThree.vue'
import StepFour from '../views/StepFour.vue'
import StepFive from '../views/StepFive.vue'
import StepSix from '../views/StepSix.vue'
import StepSeven from '../views/StepSeven.vue'
import StepEight from '../views/StepEight.vue'
import StepNine from '../views/StepNine.vue'
import StepTen from '../views/StepTen.vue'
import StepEleven from '../views/StepEleven.vue'
import StepTwelve from '../views/StepTwelve.vue'
import StepThirteen from '../views/StepThirteen.vue'
import StepFourteen from '../views/StepFourteen.vue'
import StepFifteen from '../views/StepFifteen.vue'

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
    },
    {
      path: '/step-6',
      name: 'step6',
      component: StepSix
    },
    {
      path: '/step-7',
      name: 'step7',
      component: StepSeven
    },
    {
      path: '/step-8',
      name: 'step8',
      component: StepEight
    },
    {
      path: '/step-9',
      name: 'step9',
      component: StepNine
    },
    {
      path: '/step-10',
      name: 'step10',
      component: StepTen
    },
    {
      path: '/step-11',
      name: 'step11',
      component: StepEleven
    },
    {
      path: '/step-12',
      name: 'step12',
      component: StepTwelve
    },
    {
      path: '/step-13',
      name: 'step13',
      component: StepThirteen
    },
    {
      path: '/step-14',
      name: 'step14',
      component: StepFourteen
    },
    {
      path: '/step-15',
      name: 'step15',
      component: StepFifteen
    }
  ]
})

export default router
