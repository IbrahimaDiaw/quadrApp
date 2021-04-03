import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Articles from '@/components/articles/Articles'
import CreateArticle from '@/components/articles/Create'
import UpdateArticles from '@/components/articles/Update'
import DetailsArticles from '@/components/articles/Details'
import Categorie from '@/components/categorie/Index'
import CreateCategorie from '@/components/categorie/Create'
import UpdateCategorie from '@/components/categorie/Update'
import DetailsCategorie from '@/components/categorie/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
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
      path: '/articles/details/:id',
      name: 'DetailsArticles',
      component: DetailsArticles
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
    },
    {
      path: '/categories/details/:id',
      name: 'DetailsCategorie',
      component: DetailsCategorie
    }
  ]
})
