import {LibraryItem} from "@/models/LibraryItems";

function BagCollection() {
    let arr = [];

    arr.addBagItem = function(item){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this)

        ));

        // allows us to chain methods
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

    arr.checkOutUserBag = function(){
        console.log('HERE');

        for(let i=0; i <= this.length; i++) {
            this.item.checkOut()
        }

        this.slice(this.length);

    }

    return arr;
}

export default BagCollection;