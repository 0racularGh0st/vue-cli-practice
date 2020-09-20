<template>
    <header>
    <h1> {{this.title}}</h1>
    <button v-on:click="changeTitle">Change Title</button>
    </header>
</template>

<script>

export default {
  props :['title'],
  data () {
    return {
    
    }
  },
  methods : {
    changeTitle: function(){
      this.$emit('changeTitle',"Vue Practice App");
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
