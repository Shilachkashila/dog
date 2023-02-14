
let arr = ['image/main-images/dog1_01.jpg', 'image/main-images/dog1_02.jpg', 'image/main-images/dog1_03.jpg', 'image/main-images/dog1_04.jpg', 'image/main-images/dog1_29.jpg', 'image/main-images/dog1_30.jpg',];
 
const img = document.getElementById('picture');
const btnLeft = document.querySelector('button[name="left"]');
const btnRight = document.querySelector('button[name="right"]');
const pages = document.querySelectorAll('.page-menu>li');
const arrayOfpages = Array.from(pages);

let i = 0;
let visiblePage = arr[i];
let indexOfClickedpage = null;

img.setAttribute("src", visiblePage);

btnLeft.onclick = function() {
    if(i >= 1) {
        i -= 1;
        document.querySelector('.this-page-number').innerHTML = i + 1;
        visiblePage = arr[i];
        return img.setAttribute("src", visiblePage);
    }
};

btnRight.onclick = function() {
    if(i < arr.length - 1) {
        i += 1;
        document.querySelector('.this-page-number').innerHTML = i + 1;
        visiblePage = arr[i];
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
    visiblePage = arr[i];
    return img.setAttribute("src", visiblePage);
};