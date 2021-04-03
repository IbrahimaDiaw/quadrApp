<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand><router-link :to="{ name: 'Accueil' }" class="nav-link" style="color:white">Quadra Diffusion</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Articles' }" class="nav-link">Gestion Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Categorie' }" class="nav-link">Gestion Categorie</router-link>
          </li>
        </ul>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Espace Admin</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
