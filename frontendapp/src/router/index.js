import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Articles from '@/components/articles/Articles'
import CreateArticle from '@/components/articles/Create'
import UpdateArticles from '@/components/articles/Update'
import Categorie from '@/components/categorie/Index'
import CreateCategorie from '@/components/categorie/Create'
import UpdateCategorie from '@/components/categorie/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/articles/create',
      name: 'CreateArticles',
      component: CreateArticle
    },
    {
      path: '/articles/update/:id',
      name: 'UpdateArticles',
      component: UpdateArticles
    },
    {
      path: '/categories',
      name: 'Categorie',
      component: Categorie
    },
    {
      path: '/categories/create',
      name: 'CreateCategorie',
      component: CreateCategorie
    },
    {
      path: '/categories/update/:id',
      name: 'UpdateCategorie',
      component: UpdateCategorie
    }
  ]
})
