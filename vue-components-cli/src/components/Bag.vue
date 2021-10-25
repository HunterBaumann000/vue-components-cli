<template>

  <div class="card-columns">
    <library-item v-for="(item, i) in bag"
                  :item="item"
                  :remove-function="function(item){bag.removeItem(item)}"
                  :key="i"
    ></library-item>

    <hr>
    <CheckOutBtn @check-Out-Bag="checkOut"></CheckOutBtn>
  </div>

</template>

<script>
import BagCollection from "@/models/Bag";
import {Album, Movie} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";
import CheckOutBtn from "@/components/CheckOutBtn";

export default {
  name: "Bag",
  components: {
    CheckOutBtn,
    LibraryItem
  },
  data() {
    return {

      //bag: BagCollection
      bag: new BagCollection()
          .addBagItem(new Album('2 Kisses ','Larry Jerry', 2, true))
          .addBagItem(new Movie('Shutter Island', 128, true))
    }
  },

  methods: {
    checkOut(){
      this.bag.checkOutUserBag()
    }
  }

}
</script>

<style scoped>

</style>