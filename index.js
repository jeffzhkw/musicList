musicLst = [

    {
        "title": "Sometime Around Midnight (live)",
        "artist": "The Airborne Toxic Event",
        "album": "All I Ever Wanted: Live from Walt Disney Concert Hall",
        "coverSrc": "https://m.media-amazon.com/images/I/71fQXrN5nML._SS500_.jpg",
        "link": "https://www.youtube.com/watch?v=9_PnaKRWf-g"
    },
    
    {
        "title": "Dissolve (acoustic)",
        "artist": "Absofacto",
        "album": "Dissolve (acoustic)",
        "coverSrc": "https://i.scdn.co/image/ab67616d0000b273a14cf0c7b29b53229499140b",
        "link": "https://www.youtube.com/watch?v=T16IehdIqrE"
    },

    {
        "title": "Hien",
        "artist": "Kenshi Yonezu",
        "album": "Bootleg",
        "coverSrc": "https://i.scdn.co/image/ab67616d0000b2739a067db34b24b7030cb87909",
        "link": "https://www.youtube.com/watch?v=4ye3ImAq_2s"
    },

    {
        "title": "Hometown",
        "artist": "Mamomo",
        "album": "Hometown",
        "coverSrc": "https://i1.sndcdn.com/artworks-000243651437-1dfuhs-t500x500.jpg",
        "link": "https://www.youtube.com/watch?v=1laue8XTdeg"
    },

    {
        "title": "The Real Folk Blues",
        "artist": "Seatbelts ft. Mai Yamane",
        "album": "Cowboy Bebop: Vitaminless",
        "coverSrc": "https://i1.sndcdn.com/artworks-000208643343-u5zuq7-t500x500.jpg",
        "link": "https://www.youtube.com/watch?v=eyI635o2pmk"
    }

];

function createMusic(aJSON){
    let musicElem = document.createElement("DIV");
    musicElem.classList.add("music");

    let overlayElem = document.createElement("DIV");
    overlayElem.classList.add("overlay");

    let infoElem = document.createElement("DIV");
    infoElem.classList.add("info");
    infoElem.setAttribute("title", aJSON.album);

    let titleElem = document.createElement("H3");
    titleElem.appendChild(document.createTextNode(aJSON.title));

    let artistElem = document.createElement("H4");
    artistElem.appendChild(document.createTextNode(aJSON.artist));

    musicElem.appendChild(overlayElem);
    overlayElem.appendChild(infoElem);
    infoElem.appendChild(titleElem);
    infoElem.appendChild(artistElem);
    musicElem.style.backgroundImage = "url("+aJSON.coverSrc+")";

    document.getElementsByClassName("main")[0].appendChild(musicElem);
    console.log(musicElem)
}


function createLst(){
    console.log("reached")
    for (var i = 0; i < musicLst.length; i++){
        createMusic(musicLst[i]);
    }
}

