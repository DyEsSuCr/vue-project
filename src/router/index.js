import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore.js'
import { Dashboard, Signin, Signup } from '../views/index.js'
import { Categories, Menu } from '../components/index.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // eslint-disable-next-line no-unused-vars
      redirect: to => { return { name: 'login' } }
    },
    {
      path: `/login`,
      name: 'login',
      component: Signin,
      meta: {
        requiredAuth: false
      }
    },
    {
      path: `/register`,
      name: 'register',
      component: Signup,
      meta: {
        requiredAuth: false
      }
    },
    {
      path: `/dashboard`,
      component: Dashboard,
      meta: {
        requiredAuth: true
      },
      children: [
        {
          path: ``,
          name: 'dashboard',
          component: Menu
        },
        {
          path: `categories`,
          name: 'categories',
          component: Categories
        },
        // {
        //   path: `/categories/create`,
        //   name: 'create',
        //   // component: FormCategory
        // },
        // {
        //   path: `/categories/:id`,
        //   name: 'update',
        //   // component: FormCategory
        // },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()
  const needAuth = to.meta.requiredAuth

  if (!isAuthenticated && needAuth) next('login')
  else next()
})

export default router
