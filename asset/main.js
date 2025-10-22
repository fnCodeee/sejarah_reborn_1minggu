const timeLineWrapper = document.getElementById("time_line");

const array_time_line = [
  "1997 - Awal 1998",
  "Mei 1998",
  "21 Mei 1998",
  "Pasca 1998"
]

for (let i = 1; i <= array_time_line.length; i++) {
  // console.log(timeLineWrapper);

  const image_container = document.createElement("div");
  const imageWrapper1 = document.createElement("div");
  const imageWrapper2 = document.createElement("div");
  const text = document.createElement("h1");
  const img = document.createElement("img");

  imageWrapper1.classList.add("image_container_time_line_01");
  // imageWrapper2.style.width = "160px";
  // imageWrapper2.style.height = "160px";
  // imageWrapper2.style.overflow = "hidden";

  text.innerText = `${array_time_line[i - 1]}`;
  console.log(array_time_line[i - 1]);

  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";

  image_container.classList.add("time_line_items");
  // img.src = `./assets/images/foto-0${i}.jpeg`;
  img.src = `./img/latar-img${i}.png`;

  imageWrapper1.appendChild(imageWrapper2);
  imageWrapper2.appendChild(img);

  image_container.appendChild(text);
  image_container.appendChild(imageWrapper1);
  timeLineWrapper.appendChild(image_container);
}

// timelinewrapper
// Image wrapper1
// Image wrapper2