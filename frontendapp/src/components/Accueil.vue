<template class="bg-light">
  <div >
    <b-container-fluid class="bv-example-row">
        <div class="card bg-primary mb-3">
          <div class="card-body text-center">
            <form class="container" >
              <div class="form-group" id="instant_search">
                <h2 for="help" style="color:white"> Comment pouvons-nous vous aider ?</h2>
                <input class="form-control" type="text" v-model="searchQuery" placeholder="rechercher" />
              </div>
            </form>
          </div>
        </div>
    </b-container-fluid>
    <b-container>
      <div v-if="categories.length">
        <div v-for="categorie in resultQuery" v-bind:key="categorie.id" >
          <router-link :to="{name:'DetailsCategorie',  params: { id: categorie.id }}">
            <div class="card mb-3" id="categorie">
              <div class="card-body">
                <h5>{{categorie.nom}}</h5>
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
export default {
  data() {
    return {
      categories:[],
      searchQuery:null
    }
  },
  async mounted() {
    this.categories = (await CategorieService.getAll()).data
  },
  computed:{
    resultQuery(){
      if(this.searchQuery){
      return this.categories.filter((categorie)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => categorie.nom.toLowerCase().includes(v))
      })
      }else{
        return this.categories;
      }
    }
  }
}
</script>
<style scoped>
  #categorie{
    margin-left: 200px;
    margin-right: 200px ;
    
  }
  
</style>