<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlogs" v-bind:key="blog.id" class="single-blog">
           <router-link v-bind:to="'/blog/'+blog.id"> <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
        </div>
    </div>
</template>

<script>
import searchMixins from '../mixins/searchMixins';
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://vue-blog-4faa7.firebaseio.com/posts.json').then(function(data){
           return data.json();
        }).then(function(data){
           var blogsArray=[];
           for(let key in data){
               data[key].id=key;
               blogsArray.push(data[key]);
           }
           this.blogs = blogsArray;
        })
    },
    computed: {
       
    },
    filters: {
        'to-uppercase': function(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el,binding,vnode){
                 el.style.color = "#"+ Math.random().toString().slice(2,8);
            }
        }
    },
    mixins: [searchMixins]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>