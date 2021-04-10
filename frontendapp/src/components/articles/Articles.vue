<template>
    <div>
        <b-container>
            <b-card  body-class="text-center" class="primary" header-tag="nav">
                <template #header>
                <b-nav card-header tabs>
                    <h4> listes de tous les articles</h4>
                    <div>
                        <v-btn class="cyan accent-2" @click="create"
                        slot="action"
                        light
                        medium
                        absolute
                        right
                        middle
                        fab>
                        Add
                        </v-btn>
                    </div>
                </b-nav>
                </template>

                <card class="card-body">
                    <table class="table table-hover table-bordered border-primary">
                        <thead>
                            <tr>
                                <td>Nom de l'article</td>
                                <td> Date Creation</td>
                                <td>Action </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="article in articles" :key="article.id">
                                <td>{{ article.nom }}</td>
                                <td>{{ article.created_at }}</td>
                                <td><router-link :to="{name: 'UpdateArticles', params: { id: article.id }}" class="btn btn-primary">Edit</router-link>
                                <button class="btn btn-danger" v-on:click="deleteArticle(article.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </card>
            </b-card>
        </b-container>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesService from '@/services/Articles'
export default {
    methods: {
        create(){
            this.$router.push({name: "CreateArticles"});
        },
        deleteArticle(id){
            if(confirm("Etes vous sur de vouloir supprimer cet article")){
                this.ArticlesService.delete(id) 
            }
        }
    },
    data () {
        return {
            articles:null
        }
    },
    async mounted() {
        this.articles = ( await ArticlesService.getAll()).data
    }
}
</script>
