
//откриття по кнопкі, закриття по ссилкі всередині блока та по кліку за територіею блока.

const chapterBlock = document.querySelector('.chapter-block')
const chapterMenu = document.querySelector('.chapter-menu')

function openChapterMenu() {
  chapterMenu.style.display = 'block';
}

function closeChapterMenu() {

  if (chapterMenu.style.display = 'block') {
    chapterMenu.style.display = 'none';
  }  
}

document.addEventListener('click', (e) => {
	const clickChapterMenu = e.composedPath().includes(chapterMenu) || e.composedPath().includes(chapterBlock);
 
	if ( !clickChapterMenu ) {
		closeChapterMenu()
	}
}
)

chapterMenu.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'A') return;

  closeChapterMenu();
};

chapterBlock.addEventListener("click", openChapterMenu)


const pageBlock = document.querySelector('.page-block')
const pageMenu = document.querySelector('.page-menu')

function openPageMenu() {
  pageMenu.style.display = 'block';
}

function closePageMenu() {

  if (pageMenu.style.display = 'block') {
    pageMenu.style.display = 'none';
  }  
}

document.addEventListener('click', (e) => {
	const clickPageMenu = e.composedPath().includes(pageMenu) || e.composedPath().includes(pageBlock);
 
	if ( !clickPageMenu ) {
		closePageMenu()
	}
}
)

pageMenu.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'A') return;

  closePageMenu();
};

pageBlock.addEventListener("click", openPageMenu)