import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

let openOriginalImage;

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("keydown", onPressEscToCloseImage);

//створив розмітку(рендер)

function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"

      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  });
  join("");
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openOriginalImage = basicLightbox.create(`
		<img src="${event.target.dataset.source}" width="1280" height="900">
	`);
  openOriginalImage.show();
});

function onPressEscToCloseImage(event) {
  if (event.code !== "Escape") {
    return;
  }
  openOriginalImage.close();
}
