import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};

console.log(galleryItems);


function galleryMarkup (galleryItems) {

const markup = galleryItems.map(({ preview, original, description }) => {
    
    return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
</a>
</li>`;})
.join('');
return markup;
}

function renderGallery (galleryItems) {
    const markup = galleryMarkup(galleryItems);
    refs.gallery.innerHTML = ('beforeend', markup)

}

renderGallery(galleryItems);



const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });