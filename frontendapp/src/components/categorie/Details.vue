<template>
  <div>
    <b-container-fluid class="bv-example-row">
        <div class="card bg-primary mb-3">
          <div class="card-body text-center">
            <form class="container" >
              <div class="form-group">
                <h2 for="help" style="color:white"> Comment pouvons-nous vous aider ?</h2>
                <input class="form-control" type="text" v-model="searchQuery" placeholder="rechercher par nom article ou contenu" />
              </div>
            </form>
          </div>
        </div>
    </b-container-fluid>
    <b-container>
      <div class="card" id="categorie" v-if="articles.length">
        <div class="card-header" id="card-header">
          <h5><strong>{{categories.nom}}</strong></h5>
          <label v-for="(nbre, index) in nombre" :key="index"> {{nbre.nombre}} articles dans cette categorie</label>
        </div>
        <div v-for="(article, i) in resultQuery" :key="i">
          <router-link :to="{name: 'DetailsArticles', params:{id: article.id}}">
            <div class="card-body">
              <div class="card bg-light">
                <div class="card-body">
                    <span> {{article.nom}}</span><br/>
                    <small style="color:black; float:right">publié le {{format_date(article.created_at)}}</small>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import CategorieService from '@/services/Categorie'
import moment from 'moment'
export default {
  data() {
    return {
      categories:[],
      articles:[],
      nombre: [],
      searchQuery:null
    }
  },
  async mounted() {
    this.articles = (await CategorieService.getArticleByCategorie(this.$route.params.id)).data
    this.categories = (await CategorieService.get(this.$route.params.id)).data
    this.nombre = (await CategorieService.getNbreArticle(this.$route.params.id)).data
  },
  computed:{
    resultQuery(){
      if(this.searchQuery){
      return this.articles.filter((article)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => article.nom.toLowerCase().includes(v) || article.contenu.toLowerCase().includes(v))
      })
      }else{
        return this.articles;
      }
    }
  },
  methods: {
     format_date(value){
         if (value) {
           return moment(String(value)).format('DD-MM-YYYY')
          }
      }
  },
}
</script>
<style scoped>
  #categorie{
    margin-left: 200px;
    margin-right: 200px ;
    
  }
  #card-header{
    padding-left:50px;
  }
  
</style>