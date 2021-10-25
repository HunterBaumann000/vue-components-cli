<template>

  <div class="card-columns">
    <library-item v-for="(item, i) in library"
                  :item="item"
                  :remove-function="function(item){library.removeItem(item)}"
                  :add-item-to-bag="function(item){library.addBagItem(item)}"
                  :key="i"
    ></library-item>
    <div class="card">
      <p>Checked out: {{library.checkedOutItems().length}}</p>
    </div>
  </div>

</template>

<script>
import LibraryCollection from "@/models/Library";
import {Book, Movie, Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";


export default {
  name: "Library",
  components: {
    LibraryItem
  },
  data() {
    return {
      //library: libraryCollection
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Album('Ocean Fires', 'Larren Tordle', 8))
          .addItem(new Movie('Paw Patrol!', 78))
          .addItem(new Album('Red Lions', 'Dave Madden', 11))
          .addItem(new Book('Brown Bear, Brown Bear', 0)),

    }
  },


}
</script>

<style scoped>

</style>