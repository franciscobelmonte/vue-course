<template>
    <div>
        <template v-if="person">
            <h1>{{ personData.name }}</h1>
            <h2>{{ personData.email }}</h2>
            <img :src="personData.picture" :alt="personData.name">
        </template>
        <span v-else>Loading...</span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'person',
  data () {
    return {
        person: null
    }
  },
  mounted() {
      axios.get('https://randomuser.me/api/')
        .then(response => {
            this.person = response.data.results[0];
        })
  },
  computed: {
      personData() {
          return {
              name: `${this.person.name.first} ${this.person.name.last}`,
              picture: this.person.picture.large,
              email: this.person.email,
          }
      }
  }
}
</script>

<style>
</style>
