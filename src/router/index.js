import { createRouter, createWebHistory } from 'vue-router'
import {HomeView, RegisterView, LoginView, ArticleDetailView, CreateArticleView} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/article/:slug',
      name: 'article-details',
      component: ArticleDetailView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticleView
    }
  ]
})

export default router
