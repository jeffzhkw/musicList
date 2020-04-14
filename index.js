musicLst = [
    {
        "title": "Sometime Around Midnight",
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
        "title": "Dancing Dollz - Piano Sketch",
        "artist": "ZYTOKINE",
        "album": "ZYTOKINE PIANO SKETCHES E.P",
        "coverSrc": "https://p1.music.126.net/o80OOavYDpOZVDUF2d_vpA==/5928566697405237.jpg",
        "link": "https://www.youtube.com/watch?v=rhPkBnimJL0"
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
    },

    {
        "title": "Tracks",
        "artist": "Roam",
        "album": "Backbone",
        "coverSrc": "https://f4.bcbits.com/img/a1550838333_10.jpg",
        "link": "https://www.youtube.com/watch?v=V9Tw8BJaEGk"
    },

    {
        "title": "Love On A Real Train",
        "artist": "Tangerine Dream",
        "album": "Dream Sequence",
        "coverSrc": "https://i.scdn.co/image/ab67616d0000b273595d35996137cf178de40800",
        "link": "https://www.youtube.com/watch?v=U8xYmGgfxSE"
    },
    
    {
        "title": "Bloodstream",
        "artist": "The Chainsmokers",
        "album": "Memories...Do Not Open",
        "coverSrc": "https://images-na.ssl-images-amazon.com/images/I/71d8gXwt1fL._SL1500_.jpg",
        "link": "https://www.youtube.com/watch?v=QH-fWNOsZsM"
    },

    {
        "title": "Ultimate Battle",
        "artist": "Laura Shigihara",
        "album": "Plants vs. Zombies Original Soundtrack",
        "coverSrc": "https://f4.bcbits.com/img/a4086158012_16.jpg",
        "link": "https://www.youtube.com/watch?v=oQj97Df6KXM&t=2s"
    },

    {
        "title": "秋姉妹のなく頃に　in the autumn sky",
        "artist": "ばんし",
        "album": "秋満開の風に舞う　(例大祭8)",
        "coverSrc": "https://p1.music.126.net/W9q4aOQt-PLKNonVY01l2A==/836728348780675.jpg",
        "link": "https://www.youtube.com/watch?v=Kd42PIlD21I"
    },

    {
        "title": "Tower Of Heaven (You Are Slaves)",
        "artist": "Feint",
        "album": "Tower Of Heaven (You Are Slaves)",
        "coverSrc": "https://www.stereofox.com/images/6905/resized.jpg",
        "link": "https://www.youtube.com/watch?v=z-sAl3S5qB8"
    },

    

    // {
    //     "title": "",
    //     "artist": "",
    //     "album": "",
    //     "coverSrc": "",
    //     "link": ""
    // },
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

    let aElem = document.createElement("a");
    aElem.href = aJSON.link;
    aElem.setAttribute("target", "_blank")
    
    
    aElem.appendChild(musicElem)
    musicElem.appendChild(overlayElem);
    overlayElem.appendChild(infoElem);
    infoElem.appendChild(titleElem);
    infoElem.appendChild(artistElem);
    //infoElem.appendChild(aElem);
    musicElem.style.backgroundImage = "url("+aJSON.coverSrc+")";

    document.getElementsByClassName("main")[0].appendChild(aElem);
    console.log(musicElem)
}

var counter = 0;
console.log(counter)

const showOneButton = document.getElementById("showOne")
const showAllButton = document.getElementById("showAll")

showOneButton.addEventListener("click", function(){

    if (counter < musicLst.length){
        console.log("before", counter)
        createMusic(musicLst[counter]);
        
        counter++;
        console.log("after", counter)
    }
    else{
        alert("that's all")
    }


    
})

showAllButton.addEventListener("click", function(){
    createLst();
})

function createLst(){
    console.log("reached")
    

    if (counter == musicLst.length){
        alert("that's all")
    }
    else{
        for (var i = counter; i < musicLst.length; i++){
            createMusic(musicLst[i]);
        }
        counter = musicLst.length;
    }
    
}

