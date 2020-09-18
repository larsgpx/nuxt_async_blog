<template>
  <div class="container pt-5 pb-4">
      <b-breadcrumb>
        <b-breadcrumb-item href="/blogs">          
          blogs
        </b-breadcrumb-item>        
        <b-breadcrumb-item active>{{blog.title}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="banner mb-4" :style="'background-image:url('+blog.image+')'">
        <h1>{{ blog.title }}</h1>
      </div>
      <h1 class="text-center"> {{ blog.title }}</h1>
      <p>{{ blog.description }}</p>
      <hr>
      <ShareNetwork
        network="facebook"
        :url="baseUrlBlog"
        :title="blog.title"
        :description="blog.description"
        quote="Blog de prueba"
        hashtags="vuejs,nuxt,socialmedia,larsgp"
        class="socials"
      >
        <img src="@/static/socials/FB.png">
      </ShareNetwork>
      <ShareNetwork
        network="Twitter"
        :url="baseUrlBlog"
        :title="blog.title"
        :description="blog.description"
        quote="Blog de prueba"
        hashtags="vuejs,nuxt,socialmedia,larsgp"
        class="socials"
      >
        <img src="@/static/socials/TW.png">
      </ShareNetwork>
  </div>
</template>

<script lang="ts">
import '@nuxtjs/axios';
export default {  
    data(){
        return{
            blog:[],
            baseUrlBlog:''
        }
    },
    async asyncData({ $axios, params }) {        
        const blog = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
        return { blog }
    },
    mounted(){
      this.baseUrlBlog = window.location.href
    },
    head () {
    return {
       title: this.blog.title,
       meta: [
        { hid: 'og-title', property: 'og:title', content: this.blog.title },        
        {
          hid: 'description',
          name: 'description',
          content: this.blog.description
        },
        { hid: 'og:image', name: 'og:image', content: this.blog.image }
       ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .socials{
    width:32px;
    height:32px;
    transition: .3s all;
    -webkit-transition: .3s all;
    &:hover{
      cursor:pointer;
      width:30px;
    height:30px;      
    }
  }
  .banner{
    background-size:cover;
    width:100%;
    height:450px;
    position:relative;
    h1{
      color:white;
      text-align:right;
      padding:10px;
      position:absolute;
      right:15px;
      bottom:15px;
    }
  }
</style>