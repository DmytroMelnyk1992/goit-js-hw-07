import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image lazyload" src="${preview}" alt="${description}" />
</a>
</div>
`;
    })
    .join("");
}
// Standalone variant

new SimpleLightbox(".gallery a", {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: "alt",
});
