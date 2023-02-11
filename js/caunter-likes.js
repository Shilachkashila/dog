const likeButton = document.querySelector('.like-button')

let count = 0;

likeButton.addEventListener('click', () => {
  ++count;
  document.getElementById('like-sum').innerHTML = count;
});

