
const pagesArrey = ['image/main-images/dog1_01.jpg', 'image/main-images/dog1_02.jpg', 'image/main-images/dog1_03.jpg', 'image/main-images/dog1_04.jpg', 'image/main-images/dog1_05.jpg', 'image/main-images/dog1_06.jpg', 'image/main-images/dog1_07.jpg',];
const ul = document.querySelector('.page-menu');

for(let i = 0; i < pagesArrey.length; i++) {

  const li = document.createElement('li');

  let pageNumber = i + 1;
  li.textContent = "Сторінка " + pageNumber;
  
  ul.appendChild(li);
};