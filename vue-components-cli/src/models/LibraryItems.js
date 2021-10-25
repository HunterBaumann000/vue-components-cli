function LibraryItem(media, removeFunction){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }


    media.addItemToBag = function(){
        this.Bag.addBagItem(this);
    };

    media.remove = removeFunction || function(){};


    return media;
}

function Book(title, pages, isInBag){
    this.pages = pages;
    this.title = title || 'Default Title';

    this.isInBag = isInBag;
    this.id = Math.floor(Math.random() * 10e16);
}

// same as above using class syntax
class Movie {
    constructor(title, runningTime, isInBag) {
        this.runningTime = runningTime;
        this.title = title || 'Default Title';

        this.isInBag = isInBag;
        this.id = Math.floor(Math.random() * 10e16);
    }
}

function Album(title, artist, trackCount, isInBag){

    this.title = title || 'Default Title';
    this.artist = artist;
    this.trackCount = trackCount

    this.isInBag = isInBag;
    this.id = Math.floor(Math.random() * 10e16);
}

// export multiple classes/functions/objects/etc
export {LibraryItem, Book, Movie, Album}