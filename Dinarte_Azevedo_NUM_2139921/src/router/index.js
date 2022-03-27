import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CellaretView from '../views/CellaretView.vue'
import PastryView from '../views/PastryView.vue'
import AdminView from '../views/AdminView.vue'
import AdicionarProduto from '../views/AdicionarProduto.vue'
import NovosProdutos from '../views/NovosProdutos.vue'
import LoginView from '../views/LoginView.vue'
import RegistoView from '../views/RegistoView.vue'
import NotFoundPage from '../views/NotFoundPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/cellaret',
    name: 'cellaret',
    component: CellaretView
  },
  {
    path: '/pastry',
    name: 'pastry',
    component: PastryView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/aProduto',
    name: 'aProduto',
    component: AdicionarProduto
  },
  {
    path: '/nProdutos',
    name: 'nProdutos',
    component: NovosProdutos
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registo',
    name: 'registo',
    component: RegistoView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
