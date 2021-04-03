<template>
    <div>
        <b-container>
            <b-card  body-class="text-center" header-tag="nav">
                <template #header>
                <b-nav card-header tabs>
                    <h4> Nouvelle Categorie</h4>
                </b-nav>
                </template>

                <b-card-text>
                    <b-form>
                        <b-row>
                            <b-col sm="3">
                            <label for="input-none">Nom de la Categorie:</label>
                            </b-col>
                            <b-col sm="9">
                            <b-form-input id="input-none" v-model="categorie.nom" placeholder="Nom categorie"></b-form-input>
                            </b-col>
                        </b-row><br/>
                        <div class="form-group">
                            <input type="type" class="btn btn-primary" @click="CreateCategorie" value="Ajouter Categorie"/>
                        </div>
                    </b-form>
                </b-card-text>
            </b-card>
        </b-container>
    </div>
</template>

<script>
/* eslint-disable */
import CategorieService from '@/services/Categorie'
import SweetAlert from 'sweetalert2'

const Swal = SweetAlert
export default {
    data () {
        return {
            categorie:{
                nom: null
            } 
        }
    },
    methods: {
        async CreateCategorie () {
            try {
                await CategorieService.create (this.categorie)
                Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
                })
                this.listCategorie()
            }
            catch (error) {
                console.log(error)
            }
        },
        async listCategorie(){
           await this.$router.push({name:'Categorie'})
        }
    }
}
</script>
