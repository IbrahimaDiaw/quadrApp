<template>
  <div>
    <b-container-fluid class="bv-example-row">
        <div class="card bg-primary mb-3">
          <div class="card-body text-center">
            <form class="container" >
              <div class="form-group">
                <h2 for="help" style="color:white"> Comment pouvons-nous vous aider ?</h2>
                <input class="form-control" type="text" name="search" placeholder="rechercher" />
              </div>
            </form>
          </div>
        </div>
    </b-container-fluid>
    <b-container>
            <div class="card" id="categorie">
              <div class="card-body">
                <h5>{{categories.nom}}</h5>
                <div v-for="(article, i) in articles" :key="i">
                    <div v-if="article.categorie[i]==categories.id">
                        <span> {{article.nom}}</span>
                    </div>
                </div>
                </div>
            </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import CategorieService from '@/services/Categorie'
import ArticlesService from '@/services/Articles' 
export default {
  data() {
    return {
      categories:[],
      articles:[]
    }
  },
  async mounted() {
    this.categories = (await CategorieService.get(this.$route.params.id)).data
    this.articles = (await ArticlesService.getAll()).data
  }
}
</script>
<style scoped>
  #categorie{
    margin-left: 200px;
    margin-right: 200px ;
    
  }
  
</style>