/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

//firebase
import firebase from 'firebase';
//vuex
import Vuex from 'vuex';


ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    ifLogged: false,
    AuthData: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeState(state, newState) {
      state.ifLogged = newState;
    },
  }
})


const firebaseConfig = {
  apiKey: "AIzaSyD4PtZp-n4IYguNmxsyPtBzJAjzbYIoynM",
  authDomain: "vue-lg-dashboard.firebaseapp.com",
  databaseURL: "https://vue-lg-dashboard.firebaseio.com",
  projectId: "vue-lg-dashboard",
  storageBucket: "vue-lg-dashboard.appspot.com",
  messagingSenderId: "742456501550",
  appId: "1:742456501550:web:bfa28df87300957a0946bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user){

  new Vue({
    router,
    store: store,
    render: h => h(App),
  }).$mount('#app');      
  
})

