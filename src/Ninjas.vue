<template>
  <ul>
    <li v-for="titan in titans">{{titan}}</li>
  </ul>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titans: ['Eren','Mikasa','Armin']
    }
  }
}
</script>

<style>

</style>
