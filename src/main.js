import data from "../data/data.js";
import { initMusicPlayer, pauseMusic, resumeMusic } from "./musicPlayer.js";

const timeLineWrapper = document.getElementById("time_line");
const buttonJelajah = document.getElementById("button_jelajah");
buttonJelajah.addEventListener("click", () => {
  window.location.href = "https://id.wikipedia.org/wiki/Era_Reformasi";
});


const TriggerMusic = document.getElementById("trigger-music");
let isPlaying = localStorage.getItem("laguStatus") === "playing";
if (isPlaying) {
  initMusicPlayer("lagu_merah_putih", "./assets/sound/belumTentu.mp3", 0, null);
  TriggerMusic.textContent = "🔇 Matikan Musik";
} else {
  TriggerMusic.textContent = "🔊 Nyalakan Musik";
}

  TriggerMusic.addEventListener("click", () => {
  if (!isPlaying) {
    // nyalakan musik
    initMusicPlayer("lagu_merah_putih", "./assets/sound/belumTentu.mp3", 0, null);
    TriggerMusic.textContent = "🔇 Matikan Musik";
    isPlaying = true;
  } else {
    // matikan musik
    pauseMusic();
    TriggerMusic.textContent = "🔊 Nyalakan Musik";
    isPlaying = false;
  }
});

const array_time_line = [
  "1997 - Awal 1998",
  "Mei 1998",
  "21 Mei 1998",
  "Pasca 1998",
];
for (let i = 1; i <= 4; i++) {
  // console.log(timeLineWrapper);

  const image_container = document.createElement("div");
  const imageWrapper1 = document.createElement("div");
  const imageWrapper2 = document.createElement("div");
  const text = document.createElement("h1");
  const img = document.createElement("img");

  imageWrapper1.classList.add("image_container");
  image_container.classList.add("time_line_items");

  imageWrapper2.style.width = "160px";
  imageWrapper2.style.height = "157px";
  imageWrapper2.style.overflow = "hidden";

  text.innerText = `${array_time_line[i - 1]}`;
  // console.log(array_time_line[i - 1]);

  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";

  img.src = `./assets/images/foto-0${i}.jpeg`;

  imageWrapper1.appendChild(imageWrapper2);
  imageWrapper2.appendChild(img);

  image_container.appendChild(text);
  image_container.appendChild(imageWrapper1);
  timeLineWrapper.appendChild(image_container);
}

// Direct | Logic
// Contoh array :
const formatImg = [
  { nama: "Gambar 1", ext: "jpeg" },
  { nama: "Gambar 2", ext: "jpeg" },
  { nama: "Gambar 3", ext: "jpeg" },
  { nama: "Gambar 4", ext: "jpeg" },
  { nama: "Gambar 5", ext: "jpeg" },
];

const cardContainer = document.getElementById("card_container_footer");
data.forEach((items, index) => {
  const imgWrapperCard = document.createElement("div");
  const cardImg = document.createElement("img");

  imgWrapperCard.classList.add("card");
  cardImg.classList.add("card-img");

  const isLoopLimited = index + 1; // test: loop 1 - 5

  // cardImg.src = `./assets/images/foto-0${isLoopLimited}.jpeg`;
  // cardImg.src = `../assets/tokoh-images/abri.jpg`;
  cardImg.src = items.image.src;
  imgWrapperCard.appendChild(cardImg);
  cardContainer.appendChild(imgWrapperCard);

  imgWrapperCard.addEventListener("click", () => {
  
    // Music Player For Loop:
    window.location.href = `./direct.html?id=${items.id}`;
  });
});

