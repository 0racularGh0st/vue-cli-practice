<template>
  <div id="ninjas">
  <ul>
  <li v-for="ninja in ninjas" v-bind:key="ninja" v-on:click="ninja.show=!ninja.show">
    <h2>{{ninja.name}} {{visible}}</h2>
    <h3 v-show="visible || ninja.show">{{ninja.speciality}}</h3>
   </li>
  </ul>
  </div>
</template>

<script>
export default {
// props: ['visible','ninjas'],
 props: {
   ninjas:{
     type: Array,
     required: true
   },
   visible:{
     type: Boolean,
     required: true
   }
 },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
