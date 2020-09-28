<template>
    <div class="pt-4">
        <div class="main-content-container container-fluid h-100 px-4">
            <div class="row h-100 no-gutters">
                <div class="login-box auth-form mx-auto my-auto col-md-5 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <img src="@/assets/images/avatars/icon_user.png" alt="Panel Admin" class="auth-form__logo d-table mx-auto">
                            <h5 class="auth-form__title text-center mb-4">Admin Login</h5>
                            <form @submit.prevent="login">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input  v-model="email" id="exampleInputEmail1" type="email" placeholder="Enter email" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input v-model="password" id="exampleInputPassword1" type="password" placeholder="Password" class="form-control">
                                </div>
                                <div class="form-group mb-3 d-table mx-auto">
                                    <label class="custom-control custom-checkbox">
                                        <input v-model="remember" type="checkbox" autocomplete="off" id="dr-checkbox-acbdd98a-61d1-488b-ba39-edfc14882a7d" true-value="orange" class="custom-control-input" value="orange">
                                    <label for="dr-checkbox-acbdd98a-61d1-488b-ba39-edfc14882a7d" aria-hidden="true" class="custom-control-label"></label>
                                    <span  class="custom-control-description">Recordar</span>
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-pill btn-accent d-table mx-auto">Login</button>
                            </form>
                            <d-alert class="mt-3" theme="danger" :show="error.length > 0">{{ error }}</d-alert>
                        </div>
                    </div>
                    <div class="auth-form__meta d-flex mt-4">
                        <a href="/demo/shards-dashboard-vue/forgot-password" class="" target="_self">Forgot your password?</a>
                        <a href="/demo/shards-dashboard-vue/register" class="ml-auto" target="_self">Create a new account?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
/* eslint-disable */
export default {
  data() {
    return {
      email: '',
      password: '',
      remember: '',
      error:''      
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(()=>{            
            this.$store.commit('changeState',true);
            this.$router.replace('blog-overview');
        })
        .catch((error) => {
          this.error = error.message;
          console.log(this.error)
        });
    },
  },
};
</script>
