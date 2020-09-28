import Vue from 'vue';
import Router from 'vue-router';
/* eslint-disable */
import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';
import LoginUser from './views/Login.vue';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/blog-overview',
      meta:{
        Authentication: true
      }
    },
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/user-profile-lite',
      name: 'user-profile-lite',
      component: UserProfileLite,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: AddNewPost,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
      meta:{
        Authentication: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});


router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let auth = to.matched.some(record => record.meta.Authentication);

  if(auth && !user){
    next('login');
  }else if(!auth && user){
    next('/');
  }else{
    next();
  }
})

export default router;