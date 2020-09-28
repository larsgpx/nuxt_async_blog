<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar v-if="ifLogged" :items="sidebarItems" />

      <d-col :class="ifLogged ? 'offset-lg-2 offset-md-3':''" class="main-content  p-0" tag="main" :lg="ifLogged ? '10':'12'" :md="ifLogged ? '9':'12'" :sm="12">

        <!-- Main Navbar -->
        <main-navbar v-if="ifLogged" />

        <!-- Content -->
        <slot />

        <!-- Main Footer -->
        <main-footer v-if="ifLogged" />
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
/* eslint-disable */
import getSidebarItems from '@/data/sidebar-nav-items';
import firebase from 'firebase';
// Main layout components
import MainNavbar from '@/components/layout/MainNavbar/MainNavbar.vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'analytics',
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter,
  },
  data() {
    return {
      sidebarItems: getSidebarItems(),
      ifLogged: false
    };
  },
  mounted(){
    const vm = this;
      firebase.auth().onAuthStateChanged(function(user) {      
        if (user) {        
          console.log(user);
          vm.ifLogged = true;
        } else {        
          vm.ifLogged = false;
          console.log('no estas autenticado');
        }
      });
  }
};
</script>

