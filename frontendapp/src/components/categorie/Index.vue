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
                                <td>{{ format_date(categorie.created_at) }}</td>
                                <td><router-link :to="{name: 'UpdateCategorie', params: { id: categorie.id }}" class="btn btn-primary">Edit</router-link>
                                <button class="btn btn-danger" @click.prevent="deleteCatgorie(categorie.id)">Delete</button></td>
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
import SweetAlert from 'sweetalert2'
import moment from 'moment'

const Swal = SweetAlert
export default {
    methods: {
        create(){
            this.$router.push({name: "CreateCategorie"});
        },
        deleteCatgorie(id){
            if(confirm("Etes vous sur de vouloir supprimer cet article")){
                this.CategorieService.deleteCategorie(id).then(() =>{
                    this.categories.splice(this.categories.indexOf(id),1)
                })
                Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Operation effectuee avec succes',
                showConfirmButton: false,
                timer: 1500
                })
            }
        },
        format_date(value){
         if (value) {
           return moment(String(value)).format('DD-MM-YYYY hh:mm')
          }
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
