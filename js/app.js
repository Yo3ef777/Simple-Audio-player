const rect = document.getElementById("rect2");
const btnPlay = document.getElementById("btn");
const btnForward = document.getElementById("btn2");
const btnbackward = document.getElementById("btn1");
const img = document.getElementById("img");

let sum = 1;
let AudioList;

function stopCurrentSong() {
  const AudioPlaying = new Audio(`Prhiz/${sum}.mp3`);

  AudioPlaying.pause();
  AudioPlaying.currentTime = 0;
}

function AddMusic(sum) {
    const AudioPlaying = new Audio(`Prhiz/${sum}.mp3`);
    AudioPlaying.play();
    stopCurrentSong();
    console.log(sum);

}

console.log(AddMusic(sum));

btnPlay.addEventListener("click", () => {
  AddMusic(sum);
});

btnForward.addEventListener("click", () => {
    const AudioPlaying = new Audio(`Prhiz/${sum++}.mp3`);
    const h1 = document.getElementById("h1");
    h1.innerHTML = `${sum}/114`;
    let isPlaying = false;

    console.log(sum);
    AudioPlaying.pause();
});
