import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore.js'
import { Dashboard, Signin, Signup } from '../views/index.js'
import { Categories, Menu } from '../components/index.js'
import { watchTitle } from '../libs/watchTitle.js'


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
        requiredAuth: false,
        title: 'login'
      }
    },
    {
      path: `/register`,
      name: 'register',
      component: Signup,
      meta: {
        requiredAuth: false,
        title: 'register'
      }
    },
    {
      path: `/dashboard`,
      component: Dashboard,
      meta: {
        requiredAuth: true,
        title: 'dashboard'
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
          component: Categories,
          meta: { title: 'categorias' }
        },
        // {
        //   path: `/categories/create`,
        //   name: 'create',
        //   component: FormCategory,
        //   meta: { title: 'create categoria' }
        // },
        // {
        //   path: `/categories/:id`,
        //   name: 'update',
        //   component: FormCategory,
        //   meta: { title: 'actualizar categoria' }
        // }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()
  const needAuth = to.meta.requiredAuth
  watchTitle(to.meta.title)

  if (!isAuthenticated && needAuth) next('login')
  else next()
})

export default router
