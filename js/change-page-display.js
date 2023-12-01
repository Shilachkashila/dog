

// import {pagesArrey} from 'controller.js';

const pagesArrey2 = [
    'image/main-images/dog1_01.jpg',
    'image/main-images/dog1_02.jpg',
    'image/main-images/dog1_03.jpg',
    'image/main-images/dog1_04.jpg',
    'image/main-images/dog1_05.jpg',
    'image/main-images/dog1_06.jpg',
    'image/main-images/dog1_07.jpg',
    'image/main-images/dog1_37-38.jpg',
];


const img = document.getElementById('picture');
const btnLeft = document.querySelector('button[name="left"]');
const btnRight = document.querySelector('button[name="right"]');
const pages = document.querySelectorAll('.page-menu>li');
const arrayOfpages = Array.from(pages);

let i = 0;
let visiblePage = pagesArrey2[i];
let indexOfClickedpage = null;

img.setAttribute("src", visiblePage);

btnLeft.onclick = function() {
    if(i >= 1) {
        i -= 1;
        document.querySelector('.this-page-number').innerHTML = i + 1;
        visiblePage = pagesArrey2[i];
        return img.setAttribute("src", visiblePage);
    }
};

btnRight.onclick = function() {
    if(i < pagesArrey2.length - 1) {
        i += 1;
        document.querySelector('.this-page-number').innerHTML = i + 1;
        visiblePage = pagesArrey2[i];
        return img.setAttribute("src", visiblePage);
    }
};

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    page.addEventListener("click", (e) => changePage(e));
};

const changePage = (e) => {
    const userClick = e.target;

    indexOfClickedpage = arrayOfpages.indexOf(userClick);

    document.querySelector('.this-page-number').innerHTML = indexOfClickedpage + 1;
    i = indexOfClickedpage;
    visiblePage = pagesArrey2[i];
    return img.setAttribute("src", visiblePage);
};