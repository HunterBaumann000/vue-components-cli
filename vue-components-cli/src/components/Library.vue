<template>

  <div>
    <div class="row mb-3">
      <div class="col-10">
        <b-form-input v-model="searchTerm"></b-form-input>
      </div>
      <div class="col-2">
        <b-button @click="search">Search</b-button>
      </div>
    </div>

    <div v-if="itemsAreDisplayed === true">
      Showing the top {{results.length}} results.
    </div>

    <div id="resultField" v-for="result in results" class="result" v-bind:key="result">

      <h4>{{ result.mediaType}} Title: {{result.trackName}} {{result.movieName}} {{result.albumName}} {{result.audiobookName}}</h4>

      <div class="m-1">
        <div class="row">
          <div class="col-2">
            <img :src="result.artworkUrl100">
          </div>

          <div class="col-10">

            <p>Artist Name: {{result.artistName}} {{result.movieArtist}} {{result.allArtist}} {{result.audiobookAuthor}}</p>

            <p>Description: {{result.mediaDescription}}</p>


          </div>
        </div>
        <hr>
        <b-button class="m-1">add to bag</b-button>
      </div>


    </div>

    <div v-if="noResults">
      no results were found. try again
    </div>

    <hr>

    <div v-if="searching">
      <i>Searching...</i>
    </div>

    <div v-if="itemsAreDisplayed === false">
      <i>Try searching for something!</i>
    </div>
  </div>


<!--  <div class="card-columns">-->
<!--    <library-item v-for="(item, i) in library"-->
<!--                  :item="item"-->
<!--                  :remove-function="function(item){library.removeItem(item)}"-->
<!--                  :add-item-to-bag="function(item){library.addBagItem(item)}"-->
<!--                  :key="i"-->
<!--    ></library-item>-->
<!--    <div class="card">-->
<!--      <p>Checked out: {{library.checkedOutItems().length}}</p>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
// import LibraryCollection from "@/models/Library";
// import {Book, Movie, Album} from "@/models/LibraryItems";
// import LibraryItem from "@/components/LibraryItem";


export default {
  name: "Library",
  components: {
    // LibraryItem
  },


  data() {
    return {
      searchTerm: '',
      maxResults: 36,
      mediaType: 'all',
      results: [],
      noResults: false,
      searching: false,
      itemsAreDisplayed:false,
    }
  },
  methods:{
    search:function() {
      this.results = [];
      this.searching = true;
      this.itemsAreDisplayed = true;
      fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(this.searchTerm)}&limit=${encodeURIComponent(this.maxResults)}`)
          .then(res => res.json()).then(res => {
        this.searching = false;
        this.results = res.results;
        this.noResults = this.results.length === 0;
      });
    }
  }

  // data() {
  //   return {
  //     //library: libraryCollection
  //     library: new LibraryCollection()
  //         .addItem(new Book('Interaction Design', 200))
  //         .addItem(new Album('Ocean Fires', 'Larren Tordle', 8))
  //         .addItem(new Movie('Paw Patrol!', 78))
  //         .addItem(new Album('Red Lions', 'Dave Madden', 11))
  //         .addItem(new Book('Brown Bear, Brown Bear', 0)),
  //
  //   }
  // },


}
</script>

<style scoped>

#resultField {
  border: 2px solid black;
}

</style>