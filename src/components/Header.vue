<template>
    <header>
    <h1> {{this.title}}</h1>
    <button v-on:click="changeTitle">Change Title</button>
    </header>
</template>

<script>
import {bus} from '../main';
export default {
  props :['title'],
  data () {
    return {
    
    }
  },
  methods : {
    changeTitle: function(){
      //this.$emit('changeTitle',"Vue Practice App");
      this.title = "New Title"
      bus.$emit('titleChanged',"Changed title from event bus");
    }
  }
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
