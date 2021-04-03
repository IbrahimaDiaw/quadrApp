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
        <div v-for="categorie in categories" v-bind:key="categorie.id" >
          <router-link :to="{name:'DetailsCategorie',  params: { id: categorie.id }}">
            <div class="card" id="categorie">
              <div class="card-body">
                <h5>{{categorie.nom}}</h5>
                </div>
            </div>
          </router-link>
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
      categories:null
    }
  },
  async mounted() {
    this.categories = (await CategorieService.getAll()).data
  }
}
</script>
<style scoped>
  #categorie{
    margin-left: 200px;
    margin-right: 200px ;
    
  }
  
</style>