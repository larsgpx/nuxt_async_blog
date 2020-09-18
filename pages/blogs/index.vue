<template>
    <div class="pt-5">
        <h1>blogs</h1>
        <b-card-group columns>
            <b-card
                :title="blog.title"
                :img-src="blog.image"
                :img-alt="blog.title"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                v-for="blog in blogs"                
                :key="blog.id"
            >
                <b-card-text>
                {{blog.description}}
                </b-card-text>

                <b-button :href="`/blog/${blog.slug}`" variant="primary">Ver más</b-button>
            </b-card>
        </b-card-group>
    </div>  
</template>

<script lang="ts">
// import '@nuxtjs/axios';
export default {
    data(){
        return{
            blogs:[]
        }
    },
    async asyncData({ $axios }) {
        const blogs = await $axios.$get('https://api.nuxtjs.dev/posts')
        return { blogs }
    }
}
</script>

<style>

</style>