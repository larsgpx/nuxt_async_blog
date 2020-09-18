<template>
  <div>
         <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand href="/">Vochi</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>                
                <b-navbar-nav>
                    <b-nav-item href="/">Home</b-nav-item>
                    <b-nav-item href="/blogs">Blogs</b-nav-item>
                </b-navbar-nav>                
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>