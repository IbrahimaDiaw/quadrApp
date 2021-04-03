<template>
    <div>
        <b-container>
            <b-card  body-class="text-center" class="primary" header-tag="nav">
                <template #header>
                <b-nav card-header tabs>
                    <h4> listes des Categorie</h4>
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
                                <td>Nom de la categorie</td>
                                <td> Date creation</td>
                                <td>Action </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="categorie in categories" :key="categorie.id">
                                <td>{{ categorie.nom }}</td>
                                <td>{{ categorie.created_at }}</td>
                                <td><router-link :to="{name: 'UpdateCategorie', params: { id: categorie._id }}" class="btn btn-primary">Edit</router-link>
                                <button class="btn btn-danger">Delete</button></td>
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
import CategorieService from '@/services/Categorie'
export default {
    methods: {
        create(){
            this.$router.push({name: "CreateCategorie"});
        }
    },
    data () {
        return {
            categories:null
        }
    },
    async mounted() {
        this.categories = ( await CategorieService.getAll()).data
    }
}
</script>
