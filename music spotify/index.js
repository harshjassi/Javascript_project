let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let down = document.getElementById("down");
// let masterTime = document.getElementById("masterTime");
// let currentTime = document.getElementById("currentTime");
// const timeDetail = document.getElementById("timeDetail");
// const gif = document.getElementById("gif");

// let songIndex = 0;
// const music = new Audio("songs/All My Friends Are Toxic(PagalWorld).mp3");
// music.currentTime = 0;

const songList = [
    {
        songName: "All My Friend",
        songPath: "songs/AllMyFriendsAreToxic(PagalWorld).mp3",
        coverPath: "cover/All my friend are toxic.jpg",
        songTime: "2.51s"
    },
    {
        songName: "Bad Boys",
        songPath: "songs/BadBoyTungevaagRaaban(BollyStatus.Com).mp3",
        coverPath: "cover/Bad boys.jpg",
        songTime: "3.17s"
    },
    {
        songName: "Bell Ciao",
        songPath: "songs/BellaCiaoMoneyHeist.mp3",
        coverPath: "cover/Bella ciao.jpg",
        songTime: "2.14s"
    },
    {
        songName: "Bones",
        songPath: "songs/Bones.mp3",
        coverPath: "cover/bones.jpg",
        songTime: "2.45s"
    },
    {
        songName: "Calm Down",
        songPath: "songs/CalmDownCalmDown.mp3",
        coverPath: "cover/calm down.jpg",
        songTime: "3.59s"
    },
    {
        songName: "Champion",
        songPath: "songs/ChampionDwayneDJBravo.mp3",
        coverPath: "cover/champion.jpg",
        songTime: "2.29s"
    },
    {
        songName: "Friends",
        songPath: "songs/Friends.mp3",
        coverPath: "cover/friends.jpg",
        songTime: "3.25s"
    },
    {
        songName: "Hey MAMA",
        songPath: "songs/HeyMama.mp3",
        coverPath: "cover/Hey MAMA.jpg",
        songTime: "3.16s"
    },
    {
        songName: "No Lie",
        songPath: "songs/NoLie.mp3",
        coverPath: "cover/Hey MAMA.jpg",
        songTime: "3.43s"
    },
    {
        songName: "Unholy ",
        songPath: "songs/Unholy.mp3",
        coverPath: "cover/unholy.png",
        songTime: "2.37s"
    },
];

// <div class="Song">
//     <img src="cover/All my friend are toxic.jpg" class="musicPhoto" alt="">
//     <span class="songName">All my friend</span>
//     <span class="showTime"><span>2.51s</span><i class="fa-solid fa-play songListPlay " id="0"></i> </span>
// </div>

songList.forEach((currelement) =>{
    console.log("hhh");
    const box = document.createElement('div')
    box.classList.add('Song');
    box.innerHTML = `<img src=${currelement.coverPath} class="musicPhoto">
    <span class="songName">${currelement.songName}</span>
    <span class="showTime"><span> ${currelement.songTime} </span><i class="fa-solid fa-play songListPlay " id="0"></i> </span>
    `;
    down.appendChild(box);
})

// const makeAllPlay = () => {
//     Array.from(document.getElementsByClassName("songListPlay"))((element) => {
//         element.classList.remove("fa-pause");
//         element.classList.add("fa-play");
//     })
// }

// masterPlay.addEventListener('click', () => {
//     if (music.paused) {
//         music.play();
//         masterPlay.classList.remove("fa-play");
//         masterPlay.classList.add("fa-pause");

//         makeAllPlay();
//         document.getElementById(`${songIndex}`).classList.remove("fa-play")
//         document.getElementById(`${songIndex}`).classList.add("fa-pause")

//         gif.style.opacity = 1;

//     } else {
//         music.pause();
//         masterPlay.classList.remove("fa-pause");
//         masterPlay.classList.add("fa-play");

//         makeAllPlay();
//         document.getElementById(`${songIndex}`).classList.remove("fa-pause")
//         document.getElementById(`${songIndex}`).classList.add("fa-play")

//         gif.style.opacity = -1;
//     }
// })

// music.addEventListener('timeupdate', () => {
//     timeDetail.value = parseInt((music.currentTime / music.duration) * 100);
// })

// timeDetail.addEventListener('change', () => {
//     // currentTime.innerText = music.currentTime.toFixed(2);
//     music.currentTime = (timeDetail.value * music.duration) / 100;
// })


// Array.from(document.getElementsByClassName("songListPlay"))((element) => {
//     element.addEventListener('click', (e) => {
//         if (music.paused) {
//             songIndex = e.target.id;
//             console.log(songIndex);

//             makeAllPlay();
//             e.target.classList.remove("fa-play");
//             e.target.classList.add("fa-pause");
//             masterPlay.classList.remove("fa-play")
//             masterPlay.classList.add("fa-pause")

//             music.src = songList[songIndex].songPath;
//             music.currentTime = 0;
//             music.play();
//             masterSongName.innerText = songList[songIndex].songName;
//             // masterImage.src =  songList[songIndex].coverPath;

//             gif.style.opacity = 1;
//             masterPlay.classList.remove("fa-play");
//             masterPlay.classList.add("fa-pause");
//         } else {

//             Array.from(document.getElementsByClassName("songListPlay"))((element) => {
//                 element.addEventListener("click", (e) => {
//                     songIndex = e.target.id;
//                     console.log(songIndex);

//                     makeAllPlay();
//                     e.target.classList.remove("fa-play");
//                     e.target.classList.add("fa-pause");

//                     music.src = songList[songIndex].songPath;
//                     // music.currentTime = 0;
//                     if (music.play) {
//                         music.pause();
//                         masterPlay.classList.remove("fa-pause");
//                         masterPlay.classList.add("fa-play");

//                         gif.style.opacity = -1;
//                         // makeAllPlay();
//                         document.getElementById(`${songIndex}`).classList.remove("fa-pause");
//                         document.getElementById(`${songIndex}`).classList.add("fa-play");
//                     } else {
//                         music.play();
//                         masterPlay.classList.remove("fa-play");
//                         masterPlay.classList.add("fa-pause");

//                         gif.style.opacity = 1;
//                         makeAllPlay();
//                         document.getElementById(`${songIndex}`).classList.remove("fa-pause");
//                         document.getElementById(`${songIndex}`).classList.add("fa-play");
//                     }
//                 });
//             })
//         }
//     })
// })

// document.getElementById("forward").addEventListener('click', () => {
//     if (songIndex == 9) {
//         songIndex = 0;
//     }
//     else {
//         songIndex++;
//     }

//     music.src = songList[songIndex].songPath;
//     console.log(songIndex);
//     console.log(music.src);
//     console.log(songList[songIndex].coverPath);

//     makeAllPlay();
//     document.getElementById(`${songIndex}`).classList.remove("fa-play")
//     document.getElementById(`${songIndex}`).classList.add("fa-pause");
//     masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");

//     music.play();
//     masterSongName.innerText = songList[songIndex].songName;
//     // masterImage.src =  songList[songIndex].coverPath;

//     gif.style.opacity = 1;
//     masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");
// })

// document.getElementById("backward").addEventListener('click', () => {
//     if (songIndex == 0) {
//         songIndex = 9;
//     }
//     else {
//         songIndex--;
//     }
//     music.src = songList[songIndex].songPath;
//     console.log(songIndex);
//     console.log(music.src);

//     makeAllPlay();
//     document.getElementById(`${songIndex}`).classList.remove("fa-play")
//     document.getElementById(`${songIndex}`).classList.add("fa-pause")
//     masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");

//     music.play();
//     masterSongName.innerText = songList[songIndex].songName;
//     // masterImage.src =  songList[songIndex].coverPath;

//     gif.style.opacity = 1;
//     masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");
// })