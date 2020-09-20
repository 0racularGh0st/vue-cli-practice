<template>
<div>
<formHelper>
    <h2>
        Slot
    </h2>
    <h1 slot="title">Slot Title</h1>
</formHelper>
</div>
</template>

<script>
import FormHelper from './FormHelper';
export default {
  components: {
  'formHelper': FormHelper
  },
  data () {
    return {
    
    }
  },
  methods: {
  
  }
}
</script>

<style>

</style>
