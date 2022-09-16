console_log('Welcome to SoundNode');

// Initializing Variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');


let songs = [
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName: "After Hours", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},

]

// audioElement.play();

// Handle play - pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    audioElement.play();
})

// Listen to Events
myProgressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // Update Seekbar
})