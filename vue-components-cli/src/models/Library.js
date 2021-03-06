import {LibraryItem} from "@/models/LibraryItems";

function LibraryCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new LibraryItem(
            item,
            // option 1
            // (item) => this.removeItem(item)
            // option 2
            ((collection) => function(){
                collection.removeItem(this);// "this" refers to the LibraryItem
            })(this),

            // "this" refers to the array/collection
            // "this" refers to the array/collection
        ));

        // allows us to chain methods
        return this;
    }

    arr.addItemToBag = function(item){
        alert("here");

        item.isInBag = true
        this.Bag.push(this.item);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    arr.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    arr.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}

export default LibraryCollection;