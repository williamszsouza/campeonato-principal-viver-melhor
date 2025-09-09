import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import regulamento from '../views/regulamento.vue' 
import PainelAdmin from '../views/painelAdmin.vue'
import { supabase } from '../lib/supabase.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/regulamento',
    name:'regulamento',
    component: regulamento
  },
  {
    path:'/admin',
    name:'admin',
    component:PainelAdmin,
    beforeEnter: async (to, from, next) => {
  try {
    const { data } = await supabase.auth.getUser()
    if (data?.user) {
      next()
    } else {
      next(to.path === '/login' ? true : '/login')
    }
  } catch (err) {
    console.error("Erro ao verificar usuário:", err)
    next('/login')
  }
}

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
