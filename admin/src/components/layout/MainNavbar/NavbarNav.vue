<template>
  <d-navbar-nav class="border-left flex-row">
     <li class="nav-item border-right dropdown notifications">
      <a class="nav-link nav-link-icon text-center">
        <div v-if="light" class="nav-link-icon__wrapper">
          <i class="material-icons">wb_sunny</i>          
        </div>
        <div v-else class="nav-link-icon__wrapper">
          <i class="material-icons">nights_stay</i>          
        </div>
      </a>
     
    </li>
    <li class="nav-item border-right dropdown notifications">
      <a class="nav-link nav-link-icon text-center" v-d-toggle.notifications>
        <div class="nav-link-icon__wrapper">
          <i class="material-icons">&#xE7F4;</i>
          <d-badge pill theme="danger">2</d-badge>
        </div>
      </a>
      <d-collapse id="notifications" class="dropdown-menu dropdown-menu-small">
        <d-dropdown-item>
          <div class="notification__icon-wrapper">
            <div class="notification__icon">
              <i class="material-icons">&#xE6E1;</i>
            </div>
          </div>
          <div class="notification__content">
            <span class="notification__category">Analytics</span>
            <p>Your website’s active users count increased by <span class="text-success text-semibold">28%</span> in the last week. Great job!</p>
          </div>
        </d-dropdown-item>
        <d-dropdown-item href="#">
          <div class="notification__icon-wrapper">
            <div class="notification__icon">
              <i class="material-icons">&#xE8D1;</i>
            </div>
          </div>
          <div class="notification__content">
            <span class="notification__category">Sales</span>
            <p>Last week your store’s sales count decreased by <span class="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
          </div>
        </d-dropdown-item>
        <d-dropdown-item class="notification__all text-center">View all Notifications</d-dropdown-item>
      </d-collapse>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-nowrap px-3" v-d-toggle.user-actions>
        <img class="user-avatar rounded-circle mr-2" src="@/assets/images/avatars/3.jpg" alt="User Avatar"> <span class="d-none d-md-inline-block">Larry García</span>
      </a>
      <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small">
        <d-dropdown-item><i class="material-icons">&#xE7FD;</i> Perfil de usuario</d-dropdown-item>
        <!-- <d-dropdown-item><i class="material-icons">&#xE8B8;</i> Edit Profile</d-dropdown-item> -->
        <d-dropdown-item><i class="material-icons">&#xE2C7;</i> Files</d-dropdown-item>
        <!-- <d-dropdown-item><i class="material-icons">&#xE896;</i> Transactions</d-dropdown-item> -->
        <d-dropdown-divider />
        <d-dropdown-item  class="text-danger">
          <span @click="logout()" ><i class="material-icons text-danger">&#xE879;</i> Cerrar sesión</span>
        </d-dropdown-item>
      </d-collapse>
    </li>
  </d-navbar-nav>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase';
export default {
  methods:{
    logout(){      
      firebase.auth().signOut().then(()=> this.$router.replace('login'))
    }
  },
  data(){
    return{
      light:true
    }
  }
  
}
</script>
<style>
  .nav-link:hover {
    cursor: pointer;
  }
</style>
