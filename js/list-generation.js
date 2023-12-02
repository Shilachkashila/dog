
import {pagesArrey} from './controller.js';


const ul = document.querySelector('.page-menu');

for(let i = 0; i < pagesArrey.length; i++) {

  const li = document.createElement('li');

  let pageNumber = i + 1;
  li.textContent = "Сторінка " + pageNumber;
  
  ul.appendChild(li);
};
