<template>
    <div>
        <b-container>
            <b-card  body-class="text-center" header-tag="nav">
                <template #header>
                <b-nav card-header tabs>
                    <h4> Nouvel Article</h4>
                </b-nav>
                </template>

                <b-card-text>
                    <b-form>
                        <b-row>
                            <b-col sm="3">
                            <label for="input-none">Nom de l'article:</label>
                            </b-col>
                            <b-col sm="9">
                            <b-form-input id="input-none" v-model="article.nom" placeholder="Nom Article"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="3">
                            <label for="input-none">Contenu de l'article :</label>
                            </b-col>
                            <b-col sm="9">
                            <b-form-input id="input-none" v-model="article.contenu" placeholder="Nom Article"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="3">
                            <label for="input-none"> Categories :</label>
                            </b-col>
                            <b-col sm="9">
                               <select class="form-control"
                                    v-model="article.categorie"
                                    multiple="true">
                                    <option v-for="cat in categories" v-bind:key="cat.id" :value="cat.id">{{cat.nom}}</option>
                               </select>
                            </b-col>
                        </b-row>
                        <br/>
                        <div class="form-group">
                            <input type="type" class="btn btn-primary" @click="CreateArticle" value="Ajouter article"/>
                        </div>
                    </b-form>
                </b-card-text>
            </b-card>
        </b-container>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesService from '@/services/Articles'
import CategorieService from '@/services/Categorie'
import SweetAlert from 'sweetalert2'

const Swal = SweetAlert
export default {
    data () {
        return {
            article:{
                nom: null,
                contenu:null,
                categorie:[],
            } ,
            categories:null
        }
    },
    methods: {
        async CreateArticle () {
            try {
                await ArticlesService.create (this.article)
                Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
                })
                this.listArticle()
            }
            catch (error) {
                console.log(error)
            }
        },
        async listArticle(){
          await this.$router.push({name:'Articles'})
        }
    },
   async mounted() {
        this.categories = ( await CategorieService.getAll()).data
    }
}
</script>
