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
            <div class="card-header" id="card-header">
                <h5><strong>{{article.nom}}</strong></h5>
                <label class="text-title"> {{article.created_at}}</label>
            </div> 
            <div class="card-body">
                <div class="card-text">{{article.contenu}}</div>
            </div>
        </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import ArticlesService from '@/services/Articles'
export default {
  data() {
    return {
      article:null,
    }
  },
  async mounted() {
    this.article = (await ArticlesService.get(this.$route.params.id)).data
  }
}
</script>
<style scoped>
  #categorie{
    margin-left: 200px;
    margin-right: 200px ;
  }
</style>