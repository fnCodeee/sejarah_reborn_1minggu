import data from "../data/data.js";

const timeLineWrapper = document.getElementById("time_line");
const buttonJelajah = document.getElementById("button_jelajah");
buttonJelajah.addEventListener("click", () => {
  window.location.href = "https://id.wikipedia.org/wiki/Era_Reformasi";
});

// Button Music:
// const TriggerMusic = document.getElementById("trigger-music");
// TriggerMusic.addEventListener("click", () => {
//   initMusicPlayer("lagu_merah_putih", "./assets/sound/belumTentu.mp3", 0, null);
//   console.log("Button is work!")
// });

const array_time_line = [
  "1997 - Awal 1998",
  "Mei 1998",
  "21 Mei 1998",
  "Pasca 1998",
];
for (let i = 1; i <= 4; i++) {

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
  console.log(array_time_line[i - 1]);

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
const cardContainer = document.getElementById("card_container_footer");
data.forEach(items => {
  const imgWrapperCard = document.createElement("div");
  const cardImg = document.createElement("img");

  imgWrapperCard.classList.add("card");
  cardImg.classList.add("card-img");

  cardImg.src = items.image.src;
  imgWrapperCard.appendChild(cardImg);
  cardContainer.appendChild(imgWrapperCard);

  imgWrapperCard.addEventListener("click", () => {
    window.location.href = `./direct.html?id=${items.id}`;
  });
});
