<template>
<div> 
<!-- <button @click="basics = !basics">Basics</button>
<button @click="section2show = !section2show">Section2</button>

<div v-if="basics">
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-ninjas v-bind:ninjas="ninjas" v-bind:visible="false" />
        <app-footer v-bind:title="title"/>
</div>
<div v-if="section2show"> 
      <button @click="component= 'addBlog'"> Switch to Add  Blog</button>
      <button @click="component= 'showBlogs'"> Switch to Show Blog</button>
      <button @click="component= 'listlogs'"> Switch to List Blogs</button>
      
      <keep-alive>
      <component v-bind:is="component"></component>
      </keep-alive>
</div> -->

<!-- Using routes -->
<headerNew></headerNew>
<router-view></router-view>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import Section2 from './components/Section2';
import FormHelper from './components/FormHelper';
import AddBlog from './components/AddBlog';
import ShowBlogs from './components/showBlogs';
import ListBlogs from './components/ListBlogs';
import HeaderNew from './components/HeaderNew'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'section2' : Section2,
    'formHelper' : FormHelper,
    'addBlog' : AddBlog,
    'showBlogs' : ShowBlogs,
    'listBlogs' : ListBlogs,
    'headerNew': HeaderNew
  },
  data () {
    return {
      component :  "section2",
     basics: false,
     section2show: false,
     ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: true},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
     title: "Vue App"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title= updatedTitle;
    }
  }
}
</script>

<style>

</style>
