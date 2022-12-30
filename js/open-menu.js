
const chapterBlock = document.querySelector('.chapter-block')

function openMenu() {
  const chapterMenu = document.querySelector('.chapter-menu')

    if (chapterMenu.style.display == 'none') {chapterMenu.style.display = 'block';
  }
    else{
      chapterMenu.style.display = 'none';
  }
}

chapterBlock.addEventListener("click", openMenu)


const pageBlock = document.querySelector('.page-block')

function openPageMenu() {
  const pageMenu = document.querySelector('.page-menu')

    if (pageMenu.style.display == 'none') {pageMenu.style.display = 'block';
  }
    else{
      pageMenu.style.display = 'none';
  }
}

pageBlock.addEventListener("click", openPageMenu)