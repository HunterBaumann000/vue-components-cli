<template>
  <div id="app">

    <b-container class="container-fluid">

      <b-row>
        <b-col cols="8">
          <h1>Library</h1>
          <hr>
          <library></library>
        </b-col>
        <b-col cols="4">
          <h1>My Bag</h1>
          <hr>
          <bag></bag>
        </b-col>
      </b-row>

    </b-container>
  </div>

</template>

<script>

import Library from "@/components/Library";
import Bag from "@/components/Bag";


export default {
  name: 'App',

  components: {
    Library,
    Bag,

  },

  // methods: {
  //   addItemToBag() {
  //     this.Bag.push(this.item);
  //
  //   },
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
