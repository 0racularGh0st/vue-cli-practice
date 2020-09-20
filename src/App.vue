<template>
<div>
<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
<app-ninjas v-bind:ninjas="ninjas" v-bind:visible="false" />
<app-footer v-bind:title="title"/>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return {
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
