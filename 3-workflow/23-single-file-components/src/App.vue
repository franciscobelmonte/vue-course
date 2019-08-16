<template>
  <div>
      <person></person>
      <person></person>
      <person></person>
      <person></person>
      <person></person>
  </div>
</template>

<script>
import person from './components/Person.vue';

export default {
  name: 'app',
  components: {person},
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
