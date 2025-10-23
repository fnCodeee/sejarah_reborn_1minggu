import data from "../data/data.js";

const sidebarSticky = document.getElementById("dir_sidebar-sticky");
const descriptionList = document.getElementById("dir_description-list");

const parameter = new URLSearchParams(window.location.search);
const id = parseInt(parameter.get("id"));
const item = data.find((item) => item.id === id); //Kondisi

// Fetch
if (item) {
  sidebarSticky.innerHTML = `
    <div class="x-spacing-wrapper">
    <div class="sidebar-sticky-img-wrapper">
    <div class="sidebar-sticky-img-container" style="background-image: url('${item.image.src}'); ">
    </div>
    </div>
    <div class="dir_peran_wrapper">
    <h1 class="dir_title_font font_arges">${item.title}</h1>
    <p class="dir_description_peran">
    ${item.peran}
    </p>
    </div>
    </div>
    `;

  item.deskripsi.forEach((items, index) => {
    const isLast = index === item.deskripsi.length - 1;
    console.log(isLast);

    const listItemsComponent = document.createElement("div");
    listItemsComponent.classList.add("list_items");

    listItemsComponent.innerHTML += `
      <div class="list_indicator">
      
      <!-- kecuallikan dengan akhir point list-->
      <img src="/assets/icon/${
        isLast ? "list.svg" : "list-fill.svg"
      }" width="28" class="listdot_icon"></img>
      <div class="${!isLast && "line_list"}"></div>
      </div>
      <div class="list_content">
      <p>${items}</p>
      </div>
      `;

    descriptionList.appendChild(listItemsComponent);
  });
} else {
  sidebarSticky.innerText = "Tidak Tersedia";
}
