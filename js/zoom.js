
const wrapperImage = document.querySelector('.main-image');
const image = document.querySelector('.main-image>img');
const btnPlas = document.querySelector('button[name="plas"]');
const btnMinus = document.querySelector('button[name="minus"]');

let widthImg = 

btnPlas.addEventListener("click", zoomImagePlas);
btnMinus.addEventListener("click", zoomImageMinus);

function zoomImagePlas() {
  wrapperImage.className = 'main-image-zoom';
  image.className = 'img-zoom';
}

function zoomImageMinus() {
  wrapperImage.className = 'main-image';
  image.className = 'main-image img';
}