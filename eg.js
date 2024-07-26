let box = document.getElementsByClassName("box");
let arijit = document.querySelector(".arijitSingh");
let artist = document.querySelector(".artist");

let state = true;

box.addEventListener("dblclick", ()=>{
    console.log("box is clicked")
    if(state==true){
        //arijit singh photo is being displayed
        arijit.classList.add("hidden");
        artist.classList.remove("hidden");
        state = false;
        
    }else{
        //artist image is being displayed
        artist.classList.add("hidden");
        arijit.classList.remove("hidden");
        state = true;

    }
})